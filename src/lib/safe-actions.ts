import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from 'next-safe-action'
import {zodAdapter} from 'next-safe-action/adapters/zod'
import {z} from 'zod'

export class ActionError extends Error {}

// Base Client
export const actionClient = createSafeActionClient({
  validationAdapter: zodAdapter(),
  // You can provide a custom handler for server errors, otherwise the lib will use `console.error`
  // as the default logging mechanism and will return the DEFAULT_SERVER_ERROR_MESSAGE for all server errors.
  handleServerError: (e) => {
    console.error('Action server error occurred:', e.message)

    // If the error is an instance of `ActionError`, unmask the message.
    if (e instanceof ActionError) {
      return e.message
    }

    // Otherwise return default error message.
    return DEFAULT_SERVER_ERROR_MESSAGE
  },
  // Here we define a metadata type to be used in `metadata` instance method.
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    })
  },
})

/** example of adding auth to safe-action */
// //Auth Client
// export const authActionClient = actionClient.use(async ({next}) => {
//   const user = await getCurrentUser()
//   if (!user) {
//     throw new ActionError('Unathorized')
//   }

//   return next({ctx: {user}})
// })
