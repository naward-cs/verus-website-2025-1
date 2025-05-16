import {ArrowRight, CheckCircle, Download, FileText} from 'lucide-react'

// Paper data
const papers = [
  {
    title: 'Verus Vision Paper',
    subtitle: 'Privacy, Community, Power',
    authors: [
      'Michael J. Toutonghi',
      'Michael F. Toutonghi',
      'Alex R. English',
    ],
    description:
      'The foundational vision that guides the Verus protocol development.',
    url: '/papers/VerusVision.pdf',
    isPrimary: true,
  },
  {
    title: 'Verus Phase I',
    subtitle: 'zk-SNARK Privacy and a Holistic Approach to ASICs',
    authors: ['Michael J. Toutonghi'],
    description:
      "Technical deep dive into Verus's privacy features and ASIC-resistant approach.",
    url: '/papers/VerusPhaseI.pdf',
  },
  {
    title: 'Verus Proof of Power',
    subtitle: 'A Provable Hybrid Solution to 51% Hash Attacks',
    authors: ['Michael J. Toutonghi', 'Michael F. Toutonghi', 'John Westbrook'],
    description:
      "The technical specification for Verus's hybrid consensus mechanism.",
    url: '/papers/VerusPoP.pdf',
  },
  {
    title: 'Building dApps at Any Scale',
    subtitle:
      'Your starting point to get familiar with the protocol that makes dApp development accessible.',
    authors: [],
    description:
      'A practical guide to building decentralized applications using Verus.',
    url: '/papers/Building_dApps_at_Any_Scale.pdf',
  },
]

export function PapersContent() {
  // Separate vision paper from other papers
  const visionPaper = papers.find((p) => p.isPrimary)
  const otherPapers = papers.filter((p) => !p.isPrimary)

  return (
    <div className="relative px-4 md:px-0">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      {/* Vision Paper (full width) */}
      {visionPaper && (
        <div className="mb-8">
          <PrimaryPaper paper={visionPaper} />
        </div>
      )}

      {/* Other Papers (grid) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {otherPapers.map((paper, index) => (
          <Paper key={index} paper={paper} />
        ))}
      </div>
    </div>
  )
}

function PrimaryPaper({paper}: {paper: (typeof papers)[number]}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
      <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>

      <div className="relative flex flex-col gap-6">
        <div className="w-full">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
              <FileText className="h-8 w-8 text-verus-blue/80 dark:text-blue-400" />
            </div>
            <div>
              <div className="mb-1 flex flex-col gap-2 md:flex-row md:items-center">
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white md:text-[26px]">
                  {paper.title}
                </h2>
                <span className="w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                  Primary
                </span>
              </div>
              <p className="text-[16px] text-gray-700 dark:text-gray-300 md:text-[18px]">
                {paper.subtitle}
              </p>
            </div>
          </div>

          {paper.authors.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-2 text-[13px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Authors
              </h3>
              <ul className="space-y-1">
                {paper.authors.map((author, idx) => (
                  <li
                    key={idx}
                    className="text-[15px] text-gray-700 dark:text-gray-300"
                  >
                    {author}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mb-6 text-[15px] text-gray-600 dark:text-gray-400 md:text-[16px]">
            {paper.description}
          </p>

          <div className="mb-8 flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-[15px] font-medium">
              All aspects of the vision have been implemented
            </span>
          </div>
        </div>

        <div className="flex w-full justify-center md:justify-start">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[50px] w-full items-center justify-center rounded-lg border border-blue-500 bg-blue-600 px-6 text-[16px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:w-auto"
          >
            Download Vision Paper
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

function Paper({paper}: {paper: (typeof papers)[number]}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-blue-900/30 dark:bg-gray-900/50">
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 blur-xl dark:bg-blue-400/10"></div>

      <div className="relative">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100/80 bg-white/90 shadow-sm transition-colors duration-300 group-hover:bg-blue-50 dark:border-blue-900/30 dark:bg-gray-800/90 dark:group-hover:bg-gray-800">
            <FileText className="h-6 w-6 text-verus-blue/80 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[20px]">
              {paper.title}
            </h2>
            <p className="mt-1 text-[14px] text-gray-700 dark:text-gray-300 md:text-[16px]">
              {paper.subtitle}
            </p>
          </div>
        </div>

        {paper.authors.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-1 text-[13px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Authors
            </h3>
            <ul className="space-y-1">
              {paper.authors.map((author, idx) => (
                <li
                  key={idx}
                  className="text-[14px] text-gray-700 dark:text-gray-300"
                >
                  {author}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mb-6 flex-grow text-[14px] text-gray-600 dark:text-gray-400 md:text-[15px]">
          {paper.description}
        </p>
      </div>

      <div className="mt-auto">
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-4 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
        >
          Download PDF
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}
