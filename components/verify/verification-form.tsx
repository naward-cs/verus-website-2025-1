"use client"

import { useState, useEffect } from "react"
import { Upload, MessageSquare, FileText, ArrowRight, CheckCircle, XCircle } from "lucide-react"

// Define our API response types
interface VerifyResponse {
  verified: boolean;
  error?: string;
}

export function VerificationForm() {
  // State for form fields
  const [verificationType, setVerificationType] = useState<"file" | "message" | "hash">("message")
  const [verusId, setVerusId] = useState("")
  const [signature, setSignature] = useState("")
  const [fileContent, setFileContent] = useState<File | null>(null)
  const [fileHash, setFileHash] = useState<string>("")
  const [messageContent, setMessageContent] = useState("")
  const [hashContent, setHashContent] = useState("")
  const [verificationResult, setVerificationResult] = useState<"idle" | "loading" | "success" | "error" | "failed">("idle")
  const [verificationMessage, setVerificationMessage] = useState("")
  const [isCalculatingHash, setIsCalculatingHash] = useState(false)

  // Handle verification type change
  const handleVerificationTypeChange = (type: "file" | "message" | "hash") => {
    setVerificationType(type)
    setVerificationResult("idle")
    setVerificationMessage("")
  }

  // Calculate file hash using Web Crypto API
  const calculateFileHash = async (file: File): Promise<string> => {
    try {
      setIsCalculatingHash(true);
      // Read the file as an ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      
      // Use the subtle.digest method to calculate the hash
      const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
      
      // Convert the hash to a hex string
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      return hashHex;
    } catch (error) {
      console.error('Error calculating file hash:', error);
      throw error;
    } finally {
      setIsCalculatingHash(false);
    }
  };

  // Verify hash through API with proper type safety
  const verifyHash = async (verusId: string, signature: string, hash: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/verify/hash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verusId, signature, hash }),
      });

      const data = await response.json() as VerifyResponse;

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify hash');
      }

      return data.verified;
    } catch (error) {
      console.error('Error verifying hash:', error);
      throw error;
    }
  };

  // Verify message through API with proper type safety
  const verifyMessage = async (verusId: string, signature: string, message: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/verify/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verusId, signature, message }),
      });

      const data = await response.json() as VerifyResponse;

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify message');
      }

      return data.verified;
    } catch (error) {
      console.error('Error verifying message:', error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form validation
    if (!verusId) {
      setVerificationResult("error")
      setVerificationMessage("Please enter a VerusID")
      return
    }
    
    if (!signature) {
      setVerificationResult("error")
      setVerificationMessage("Please enter a signature")
      return
    }
    
    if (verificationType === "file" && !fileContent) {
      setVerificationResult("error")
      setVerificationMessage("Please select a file")
      return
    }
    
    if (verificationType === "message" && !messageContent) {
      setVerificationResult("error")
      setVerificationMessage("Please enter a message")
      return
    }
    
    if (verificationType === "hash" && !hashContent) {
      setVerificationResult("error")
      setVerificationMessage("Please enter a hash")
      return
    }
    
    // Set loading state
    setVerificationResult("loading")
    setVerificationMessage("Verifying signature...")
    
    try {
      let isVerified = false;
      
      // Handle different verification types
      switch (verificationType) {
        case "hash":
          isVerified = await verifyHash(verusId, signature, hashContent);
          break;
          
        case "message":
          isVerified = await verifyMessage(verusId, signature, messageContent);
          break;
          
        case "file":
          // For file verification, we use the calculated hash
          if (!fileHash) {
            throw new Error("File hash calculation failed. Please try again.");
          }
          isVerified = await verifyHash(verusId, signature, fileHash);
          break;
        
        default:
          throw new Error("Invalid verification type");
      }
      
      if (isVerified) {
        setVerificationResult("success")
        setVerificationMessage(`${verificationType === "file" ? "File" : verificationType === "hash" ? "Hash" : "Message"} signature successfully verified!`)
      } else {
        setVerificationResult("failed")
        setVerificationMessage(`Signature verification failed. The signature is not valid for this ${verificationType === "file" ? "file" : verificationType === "hash" ? "hash" : "message"} and VerusID.`)
      }
    } catch (error) {
      setVerificationResult("error")
      setVerificationMessage(error instanceof Error ? error.message : "An unknown error occurred")
    }
  }

  // Handle file selection and calculate hash
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFileContent(selectedFile);
      setFileHash(""); // Clear previous hash
      
      try {
        // Calculate hash when file is selected
        const hash = await calculateFileHash(selectedFile);
        setFileHash(hash);
      } catch (error) {
        console.error("Failed to calculate file hash:", error);
        setVerificationResult("error");
        setVerificationMessage("Failed to calculate file hash. Please try again.");
      }
    }
  }

  // Get icon for current verification type
  const getVerificationIcon = () => {
    switch(verificationType) {
      case "file":
        return <Upload className="h-5 w-5 text-verus-blue dark:text-blue-400" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-verus-blue dark:text-blue-400" />
      case "hash":
        return <FileText className="h-5 w-5 text-verus-blue dark:text-blue-400" />
    }
  }

  // Render verification result
  const renderVerificationResult = () => {
    if (verificationResult === "idle") return null;

    const resultClasses = {
      loading: "bg-blue-50/70 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50",
      success: "bg-green-50/70 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800/50",
      error: "bg-red-50/70 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50",
      failed: "bg-red-50/70 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50",
    };

    const iconMap = {
      loading: null,
      success: <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400" />,
      error: <XCircle className="h-6 w-6 text-red-500 dark:text-red-400" />,
      failed: <XCircle className="h-6 w-6 text-red-500 dark:text-red-400" />,
    };

    return (
      <div className={`p-6 rounded-lg ${resultClasses[verificationResult]} backdrop-blur-sm`}>
        <div className="flex flex-col items-center text-center gap-2">
          {verificationResult !== "loading" && iconMap[verificationResult]}
          <p className="font-medium text-center">{verificationMessage}</p>
          
          {verificationResult === "failed" && (
            <p className="text-sm mt-2">
              Ensure that the VerusID, signature, and {verificationType} are correct and try again.
            </p>
          )}
          
          {verificationResult === "success" && (
            <div className="flex flex-col items-center mt-2">
              <p className="text-sm">
                The signature is valid and was created by the specified VerusID.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="relative">
        {/* Verification type selector and YouTube link */}
        <div className="mb-8 flex flex-wrap justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleVerificationTypeChange("message")}
              className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors flex items-center gap-2 ${
                verificationType === "message"
                  ? "bg-verus-blue text-white dark:bg-blue-700" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              Message
            </button>
            <button
              type="button"
              onClick={() => handleVerificationTypeChange("file")}
              className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors flex items-center gap-2 ${
                verificationType === "file"
                  ? "bg-verus-blue text-white dark:bg-blue-700" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <Upload className="h-4 w-4" />
              File
            </button>
            <button
              type="button"
              onClick={() => handleVerificationTypeChange("hash")}
              className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors flex items-center gap-2 ${
                verificationType === "hash"
                  ? "bg-verus-blue text-white dark:bg-blue-700" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <FileText className="h-4 w-4" />
              Hash
            </button>
          </div>
          
          <a 
            href="/wallet" 
            rel="noopener noreferrer"
            className="group h-[40px] px-4 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit gap-2"
          >
            Download wallet to create signatures
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current verification type header */}
          <div className="flex items-center gap-2 mb-4">
            {getVerificationIcon()}
            <h3 className="text-[18px] font-medium text-gray-900 dark:text-white">
              {verificationType === "file" ? "File Verification" : 
               verificationType === "message" ? "Message Verification" : 
               "Hash Verification"}
            </h3>
          </div>
          
          {/* Verification content based on selected type */}
          {verificationType === "file" && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-blue-200/50 dark:border-blue-800/30 rounded-lg p-6 text-center bg-blue-50/30 dark:bg-blue-950/20 backdrop-blur-sm">
                <label className="block w-full cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="*/*"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <Upload
                      className="mx-auto h-12 w-12 text-blue-400 dark:text-blue-500"
                    />
                    {fileContent ? (
                      <div className="mt-2 space-y-3">
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                          Selected file: {fileContent.name}
                        </p>
                        {isCalculatingHash ? (
                          <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                            <svg className="animate-spin mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-sm">Calculating hash...</span>
                          </div>
                        ) : (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">File Hash (SHA-256)</h4>
                            <p className="font-mono text-xs break-all text-gray-700 dark:text-blue-100 bg-gray-100 dark:bg-gray-800 p-3 rounded max-w-full border border-gray-200 dark:border-gray-700">
                              {fileHash || "Hash calculation failed. Please try again."}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                          Click to select a file or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Any file type is supported
                        </p>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>
          )}

          {verificationType === "message" && (
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                className="w-full p-3 border border-blue-200/70 dark:border-blue-800/30 rounded-lg shadow-sm focus:ring-verus-blue focus:border-verus-blue dark:bg-gray-800/50 dark:text-white backdrop-blur-sm"
                placeholder="Enter the message to verify"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Enter the exact message that was signed (must match exactly, including spaces and capitalization)
              </p>
            </div>
          )}

          {verificationType === "hash" && (
            <div className="space-y-2">
              <label
                htmlFor="hash"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Hash
              </label>
              <input
                type="text"
                id="hash"
                name="hash"
                value={hashContent}
                onChange={(e) => setHashContent(e.target.value)}
                className="w-full p-3 border border-blue-200/70 dark:border-blue-800/30 rounded-lg shadow-sm focus:ring-verus-blue focus:border-verus-blue dark:bg-gray-800/50 dark:text-white backdrop-blur-sm font-mono"
                placeholder="Enter the hash to verify (hex format)"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Enter the cryptographic hash that was signed (e.g., SHA-256 hash)
              </p>
            </div>
          )}

          {/* VerusID input */}
          <div className="space-y-2">
            <label
              htmlFor="verusId"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              VerusID
            </label>
            <input
              type="text"
              id="verusId"
              name="verusId"
              autoComplete="off"
              value={verusId}
              onChange={(e) => setVerusId(e.target.value)}
              className="w-full p-3 border border-blue-200/70 dark:border-blue-800/30 rounded-lg shadow-sm focus:ring-verus-blue focus:border-verus-blue dark:bg-gray-800/50 dark:text-white backdrop-blur-sm"
              placeholder="Enter the VerusID of the signer"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              The identity that created the signature (e.g., somebody@)
            </p>
          </div>

          {/* Signature input */}
          <div className="space-y-2">
            <label
              htmlFor="signature"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Signature
            </label>
            <textarea
              id="signature"
              name="signature"
              rows={3}
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              className="w-full p-3 border border-blue-200/70 dark:border-blue-800/30 rounded-lg shadow-sm focus:ring-verus-blue focus:border-verus-blue dark:bg-gray-800/50 dark:text-white backdrop-blur-sm font-mono text-sm"
              placeholder="Enter the signature to verify"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Paste the full signature string
            </p>
          </div>

          {/* Submit button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={verificationResult === "loading" || isCalculatingHash || (verificationType === "file" && fileContent && !fileHash)}
              className="h-[46px] px-6 py-2 bg-verus-blue hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-600/20 dark:hover:shadow-blue-950/40 transition-all duration-300 hover:-translate-y-[1px]"
            >
              {verificationResult === "loading" ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                "Verify Signature"
              )}
            </button>
          </div>

          {/* Verification result */}
          {renderVerificationResult()}
        </form>
      </div>
    </div>
  )
} 