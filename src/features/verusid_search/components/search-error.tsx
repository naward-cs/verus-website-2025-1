import {useFormState} from 'react-hook-form'

export function SearchError() {
  const {errors} = useFormState()
  console.log('errors in search errors', errors)
  if (!errors.root) return null
  return (
    <div className="rounded-lg border border-red-200 bg-red-50/70 p-6 text-red-700 backdrop-blur-sm dark:border-red-800/50 dark:bg-red-900/20 dark:text-red-300">
      <h3 className="mb-2 text-lg font-semibold">Error</h3>
      <p>{errors.root.message}</p>
    </div>
  )
}
