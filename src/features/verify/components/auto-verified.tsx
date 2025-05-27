import {Info} from 'lucide-react'
import {useFormState} from 'react-hook-form'

import {useFormValues} from '@/hooks/use-form-values'

export function AutoVerification() {
  const {auto} = useFormValues()
  const {isDirty} = useFormState()
  if (!auto || isDirty) return null
  return (
    <div className="mb-4 flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
      <Info className="h-4 w-4" />
      <span>
        This verification was automatically performed using URL parameters.
      </span>
    </div>
  )
}
