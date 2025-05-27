import {z} from 'zod'

export const verusIDsearchSchema = z.object({
  verusid: z.string().min(1, 'Please enter a VerusID'),
})
