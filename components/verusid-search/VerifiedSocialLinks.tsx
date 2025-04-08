import React, { useState, useEffect } from 'react';
import { VerificationBadge } from './VerificationBadge';
import { verifyServiceProof, VerificationResult } from '@/lib/verificationService';
import { VerificationStatus } from './VerificationBadge';

interface ServiceData {
  name?: string;
  accountname?: string;
  accountid?: string;
  qualifiedname?: string;
  [key: string]: any;
}

interface VerifiedSocialLinksProps {
  services: Record<string, ServiceData>;
  userId: string;
}

// Define UI-specific verification result that includes loading and unknown states
interface UIVerificationResult {
  valid: 'true' | 'false' | 'error' | 'loading' | 'unknown';
  key1?: {
    valid: 'true' | 'false' | 'error';
    message?: string;
  };
  key2?: {
    valid: 'true' | 'false' | 'error';
    message?: string;
  };
  overall?: {
    valid: 'true' | 'false' | 'error';
    message?: string;
  };
  address?: string;
  proofLink?: string;
}

// Add SVG icons for social platforms
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-600" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

const VerusIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path fill="white" d="M8 8l8 8M8 16l8-8" stroke="white" strokeWidth="2" />
  </svg>
);

export function VerifiedSocialLinks({ services, userId }: VerifiedSocialLinksProps) {
  const [verificationResults, setVerificationResults] = useState<Record<string, UIVerificationResult>>({});
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Initialize verification status
    const initialResults: Record<string, UIVerificationResult> = {};
    const initialLoadingState: Record<string, boolean> = {};
    
    Object.keys(services).forEach(serviceKey => {
      initialResults[serviceKey] = { valid: 'loading' };
      initialLoadingState[serviceKey] = true;
    });
    
    setVerificationResults(initialResults);
    setIsLoading(initialLoadingState);
    
    // Verify each service
    Object.entries(services).forEach(async ([serviceKey, serviceData]) => {
      try {
        // Skip verification if no URL or proof data
        const hasProofData = Object.values(serviceData).some(val => 
          typeof val === 'string' && (val.startsWith('http') || val.includes('@'))
        );
        
        if (!hasProofData) {
          setVerificationResults(prev => ({
            ...prev,
            [serviceKey]: { valid: 'unknown' }
          }));
          setIsLoading(prev => ({
            ...prev,
            [serviceKey]: false
          }));
          return;
        }
        
        // Prepare verification data
        const verificationData = {
          user: userId,
          ...serviceData
        };
        
        // Verify the service
        const result = await verifyServiceProof(verificationData);
        
        // Convert the API result to our UI result
        const uiResult: UIVerificationResult = {
          ...result,
          valid: result.valid
        };
        
        setVerificationResults(prev => ({
          ...prev,
          [serviceKey]: uiResult
        }));
      } catch (error) {
        console.error(`Error verifying ${serviceKey}:`, error);
        setVerificationResults(prev => ({
          ...prev,
          [serviceKey]: { valid: 'error' }
        }));
      } finally {
        setIsLoading(prev => ({
          ...prev,
          [serviceKey]: false
        }));
      }
    });
  }, [services, userId]);

  // Convert verification result to badge status
  const getVerificationStatus = (result?: UIVerificationResult): VerificationStatus => {
    if (!result) return 'unknown';
    if (result.valid === 'loading') return 'loading';
    if (result.valid === 'true' || result.overall?.valid === 'true') return 'pass';
    if (result.valid === 'false' || result.overall?.valid === 'false') return 'fail';
    return 'unknown';
  };

  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(services).map(([key, service]) => {
        if (key.toLowerCase().includes('reddit')) {
          console.log(`VerifiedSocialLinks: Skipping rendering for Reddit service key: ${key}`);
          return null;
        }
        
        // Check if this is a social service with a URL
        const hasUrl = Object.values(service).some(val => 
          typeof val === 'string' && val.startsWith('http')
        );
        
        if (!hasUrl) return null;
        
        const url = Object.values(service).find(val => 
          typeof val === 'string' && val.startsWith('http')
        ) as string;
        
        // Determine icon
        let icon = <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
        </svg>;

        if (key.toLowerCase().includes('linkedin')) 
          icon = <LinkedInIcon />;
        else if (key.toLowerCase().includes('reddit')) 
          icon = <RedditIcon />;
        else if (key.toLowerCase().includes('twitter') || key.toLowerCase().includes('x')) 
          icon = <svg viewBox="0 0 24 24" className="w-5 h-5 text-black dark:text-white" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>;
        else if (key.toLowerCase().includes('github')) 
          icon = <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>;
        else if (key.toLowerCase().includes('verus') || key.toLowerCase().includes('vrsc')) 
          icon = <VerusIcon />;

        const verificationStatus = getVerificationStatus(verificationResults[key]);
        const isServiceLoading = isLoading[key];
        
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 px-3 py-1 text-sm transition-colors gap-2 text-gray-900 dark:text-gray-200"
          >
            {icon}
            <span>{service.name || service.accountname || key}</span>
            <VerificationBadge 
              status={isServiceLoading ? 'loading' : verificationStatus} 
              showText={false} 
              className="ml-1" 
            />
          </a>
        );
      })}
    </div>
  );
} 