import {OtherPapers} from './other-papers'
import {PrimaryPaper} from './primary-paper'

export function PapersContent() {
  // Separate vision paper from other papers
  return (
    <div className="relative px-4 md:px-0">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      {/* Vision Paper (full width) */}
      <PrimaryPaper />

      {/* Other Papers (grid) */}
      <OtherPapers />
    </div>
  )
}
