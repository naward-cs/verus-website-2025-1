import {useFormContext} from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

export function FormSignatureField() {
  const {control} = useFormContext()
  return (
    <FormField
      control={control}
      name="signature"
      render={({field}) => (
        <FormItem>
          <FormLabel className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Signature
          </FormLabel>
          <FormControl>
            <textarea
              rows={3}
              placeholder="Enter the signature to verify"
              className="min-h-20 w-full rounded-lg border border-blue-200/70 p-3 font-mono text-sm shadow-sm backdrop-blur-sm focus:border-verus-blue focus:ring-verus-blue dark:border-blue-800/30 dark:bg-gray-800/50 dark:text-white"
              {...field}
            />
          </FormControl>
          <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
            Paste the full signature string
          </FormDescription>
        </FormItem>
      )}
    />
  )
}
