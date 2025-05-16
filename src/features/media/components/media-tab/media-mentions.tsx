// Media mentions component displaying articles and press about Verus

import MediaItems from './media-items'

export function MediaMentions() {
  return (
    <div className="px-4 md:px-0">
      <div className="mb-8 md:mb-12">
        <h2 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[28px]">
          Media Coverage
        </h2>
        <p className="mt-2 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
          Recent articles, interviews, and press features about Verus and its
          technology.
        </p>
      </div>

      <MediaItems />

      <div className="mt-8 text-center">
        <p className="text-[14px] text-gray-600 dark:text-gray-300">
          For press inquiries, please contact our media team at{' '}
          <a
            href="mailto:press@veruscoin.io"
            className="text-verus-blue hover:underline dark:text-blue-400"
          >
            press@verus.io
          </a>
        </p>
      </div>
    </div>
  )
}
