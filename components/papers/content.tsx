import { Download, FileText, CheckCircle, ArrowRight } from "lucide-react"

// Paper data
const papers = [
  {
    title: "Verus Vision Paper",
    subtitle: "Privacy, Community, Power",
    authors: ["Michael J. Toutonghi", "Michael F. Toutonghi", "Alex R. English"],
    description: "The foundational vision that guides the Verus protocol development.",
    url: "/papers/VerusVision.pdf",
    isPrimary: true
  },
  {
    title: "Verus Phase I",
    subtitle: "zk-SNARK Privacy and a Holistic Approach to ASICs",
    authors: ["Michael J. Toutonghi"],
    description: "Technical deep dive into Verus's privacy features and ASIC-resistant approach.",
    url: "/papers/VerusPhaseI.pdf"
  },
  {
    title: "Verus Proof of Power",
    subtitle: "A Provable Hybrid Solution to 51% Hash Attacks",
    authors: ["Michael J. Toutonghi", "Michael F. Toutonghi", "John Westbrook"],
    description: "The technical specification for Verus's hybrid consensus mechanism.",
    url: "/papers/VerusPoP-paper.pdf"
  },
  {
    title: "Building dApps at Any Scale",
    subtitle: "Your starting point to get familiar with the protocol that makes dApp development accessible.",
    authors: [],
    description: "A practical guide to building decentralized applications using Verus.",
    url: "/papers/Building_dApps_at_Any_Scale.pdf"
  }
]

export function PapersContent() {
  // Separate vision paper from other papers
  const visionPaper = papers.find(p => p.isPrimary);
  const otherPapers = papers.filter(p => !p.isPrimary);
  
  return (
    <div className="px-4 md:px-0 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      
      {/* Vision Paper (full width) */}
      {visionPaper && (
        <div className="mb-8">
          <PrimaryPaper paper={visionPaper} />
        </div>
      )}
      
      {/* Other Papers (grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {otherPapers.map((paper, index) => (
          <Paper key={index} paper={paper} />
        ))}
      </div>
    </div>
  )
}

function PrimaryPaper({ paper }: { paper: typeof papers[number] }) {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden group transition-all duration-300">
      <div className="absolute top-6 left-6 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
      
      <div className="flex flex-col gap-6 relative">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-shrink-0 h-16 w-16 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center transition-colors duration-300 shadow-sm">
              <FileText className="h-8 w-8 text-verus-blue/80 dark:text-blue-400" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <h2 className="text-2xl md:text-[26px] font-medium text-gray-900 dark:text-white">
                  {paper.title}
                </h2>
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium w-fit">
                  Primary
                </span>
              </div>
              <p className="text-[16px] md:text-[18px] text-gray-700 dark:text-gray-300">
                {paper.subtitle}
              </p>
            </div>
          </div>
          
          {paper.authors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-[13px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Authors</h3>
              <ul className="space-y-1">
                {paper.authors.map((author, idx) => (
                  <li key={idx} className="text-[15px] text-gray-700 dark:text-gray-300">{author}</li>
                ))}
              </ul>
            </div>
          )}
          
          <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-400 mb-6">
            {paper.description}
          </p>
          
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-8">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-[15px] font-medium">All aspects of the vision have been implemented</span>
          </div>
        </div>
        
        <div className="w-full flex justify-center md:justify-start">
          <a 
            href={paper.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group h-[50px] px-6 bg-blue-600 dark:bg-white/90 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-white backdrop-blur-sm rounded-lg text-[16px] font-medium flex items-center justify-center transition-all duration-300 border border-blue-500 dark:border-white/60 hover:shadow-lg hover:-translate-y-[1px] w-full md:w-auto"
          >
            Download Vision Paper
            <ArrowRight className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

function Paper({ paper }: { paper: typeof papers[number] }) {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm p-6 border border-blue-100/80 dark:border-blue-900/30 shadow-sm h-full flex flex-col relative overflow-hidden group transition-all duration-300">
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
      
      <div className="relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 group-hover:bg-blue-50 dark:group-hover:bg-gray-800 flex items-center justify-center transition-colors duration-300 shadow-sm">
            <FileText className="h-6 w-6 text-verus-blue/80 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-[18px] md:text-[20px] font-medium text-gray-900 dark:text-white">
              {paper.title}
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 dark:text-gray-300 mt-1">
              {paper.subtitle}
            </p>
          </div>
        </div>
        
        {paper.authors.length > 0 && (
          <div className="mb-4">
            <h3 className="text-[13px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Authors</h3>
            <ul className="space-y-1">
              {paper.authors.map((author, idx) => (
                <li key={idx} className="text-[14px] text-gray-700 dark:text-gray-300">{author}</li>
              ))}
            </ul>
          </div>
        )}
        
        <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-400 mb-6 flex-grow">
          {paper.description}
        </p>
      </div>
      
      <div className="mt-auto">
        <a 
          href={paper.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group h-[40px] md:h-[50px] px-4 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
        >
          Download PDF
          <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
} 