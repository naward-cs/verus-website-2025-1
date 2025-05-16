import { Buffer } from 'buffer/' // Import Buffer for web environment

// Remove the safe import logic for crypto-js
// let CryptoJS;
// try {
//   CryptoJS = require('crypto-js')
// } catch (error) {
//   console.warn('Failed to import crypto-js. Using mock implementation.', error);
//   // Mock implementation of required crypto-js functionality
//   CryptoJS = {
//     enc: {
//       Hex: {
//         parse: () => ({})
//       },
//       Base64: {
//         stringify: () => ''
//       }
//     }
//   }
// }

import he from 'he'
// const he = require('he')
const hexCharsregex = /[0-9A-Fa-f]{6}/g
const base64urlregex = /^[A-Za-z0-9_-]+$/

export const isHex = (hex) => {
  // Basic validation
  if (typeof hex !== 'string') return false
  const r = hexCharsregex.test(hex)
  hexCharsregex.lastIndex = 0 // Reset regex state
  return r
}

export const isBase64url = (str) => {
  // Basic validation
  if (typeof str !== 'string') return false
  const r = base64urlregex.test(str)
  base64urlregex.lastIndex = 0 // Reset regex state
  return r
}

export const reverseHex = (hex) => {
  // Ensure hex is not null or undefined, and is a string
  if (typeof hex !== 'string' || hex === null) {
    console.warn("reverseHex: Input is not a valid string", hex)
    return '' // Return empty string or handle as appropriate
  }
  const match = hex.match(/../g)
  if (!match) {
    console.warn("reverseHex: No pairs found in hex string", hex)
    return '' // Return empty if no pairs are found
  }
  return match.reverse().join('')
}

// Rewrite HexToBase64 using Buffer from the 'buffer' package
export const HexToBase64 = (hex) => {
  if (!hex || typeof hex !== 'string') {
    console.log("HexToBase64: No valid hex string provided")
    return false
  }

  try {
    // Create a buffer from the hex string using the imported Buffer class
    const buffer = Buffer.from(hex, 'hex')
    // Convert buffer to base64 string
    const base64 = buffer.toString('base64')
    // Convert base64 to base64url (RFC 4648 Section 5)
    const base64url = base64
      .replace(/\+/g, '-') // Replace + with -
      .replace(/\//g, '_') // Replace / with _
      .replace(/=+$/, '') // Remove trailing padding

    console.log(`HexToBase64: Converted ${hex} to ${base64url} using Buffer package`)
    return base64url
  } catch (error) {
    // Catch errors during buffer creation or conversion (e.g., invalid hex)
    console.error("HexToBase64 error with Buffer package:", error)
    return false
  }
}

export const isValidUrl = (url) => {
  // Basic validation
  if (typeof url !== 'string') return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

const htmlStripRegex = /<[^>]+>/g
const verusProofMsgRegex =
  /(i[A-Za-z0-9]+) ([0-9]+): controller of ([^:]+) controls ([^:]+):([A-Za-z0-9/+=]+):?([A-Za-z0-9/+=]+)?/gim
// old: /(^|['"\n>;])i[A-Za-z0-9]+ [0-9]+: controller of VerusID .* controls .*:[A-Za-z0-9/+=:]+(\1|[<&\n])/g
// new: /(i[A-Za-z0-9]+) ([0-9]+): controller of ([^:]+) controls ([^:]+):([A-Za-z0-9/+=]+):?([A-Za-z0-9/+=]+)?/gim
const cleanupProofMsg = (msg) => {
  // Basic validation
  if (typeof msg !== 'string') return ''
  // unescape quotes
  msg = msg.replace(/\\"/g, '"').replace(/\\'/g, "'")
  // trim off extra start chars
  msg = msg.replace(/^['"\n ;>]/, '')
  // trim off extra end chars
  msg = msg.replace(/['"\n &<]$/, '')
  return msg
}

export const verusWebProof = (content) => {
  if (typeof content !== 'string') {
    console.warn("verusWebProof: Input content is not a string", content)
    return false // Expecting a string to match against regex
  }
  const proofs = content.match(verusProofMsgRegex)

  if (proofs && Array.isArray(proofs)) {
    let proof = proofs.filter((str) => {
      // Ensure str is a string before calling indexOf
      return typeof str === 'string' && str.indexOf('&quot;') === -1
    })

    if (proof.length < 1 && proofs.length > 0) {
      proof = [ proofs[ 0 ] ] // Ensure proof is an array for consistency
    } else if (proof.length >= 1) {
      proof = [ proof[ proof.length - 1 ] ] // Take the last valid proof as an array
    }

    // Ensure proof is a non-empty array and its first element is a string
    if (proof.length === 0 || typeof proof[ 0 ] !== 'string') {
      console.warn("verusWebProof: Filtered proof is not a valid string array", proof)
      return false
    }

    let processedProof = he.decode(cleanupProofMsg(proof[ 0 ].replace(htmlStripRegex, '')))
    const s = processedProof.split(':')
    let message = ''
    let signature = ''
    if (s.length > 2) {
      message = s[ 0 ] + ':' + s[ 1 ]
      signature = s[ 2 ]
    }

    const result = { Message: message, Signature: signature }
    return result
  }
  return false
}

export const verusBlockchainProof = (context) => {
  if (context && typeof context === 'string') {
    const s = context.split(':')
    // Basic validation to ensure enough parts exist
    if (s.length >= 4) {
      return {
        key1: { Message: s[ 0 ] + ':' + s[ 1 ], Signature: s[ 2 ] },
        key2: { Message: s[ 0 ] + ':' + s[ 1 ] + ':' + s[ 2 ], Signature: s[ 3 ] },
      }
    } else {
      console.warn("verusBlockchainProof: Context string does not have enough parts after split:", context)
    }
  } else {
    console.warn("verusBlockchainProof: Input context is not a valid string", context)
  }
  return false
}
