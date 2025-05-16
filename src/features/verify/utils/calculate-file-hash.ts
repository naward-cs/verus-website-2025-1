import {createHash} from 'crypto'
import {Readable} from 'stream'

// Calculate file hash using Web Crypto API
export const calculateFileHash = async (file: File): Promise<string> => {
  try {
    const stream = new Readable({
      async read() {
        const buffer = await file.arrayBuffer() // Get ArrayBuffer from File
        this.push(Buffer.from(buffer)) // Push as Node.js Buffer
        this.push(null) // Signal end of stream
      },
    })
    return new Promise((resolve, reject) => {
      const hash = createHash('sha256')

      stream.on('data', (data: Buffer) => {
        // Explicitly type data as Buffer
        hash.update(data)
      })

      stream.on('end', () => {
        const fileHash = hash.digest('hex')
        resolve(fileHash)
      })

      stream.on('error', (err) => {
        reject(err)
      })
    })
  } catch (error) {
    console.error('Error calculating file hash:', error)
    throw error
  }
}
