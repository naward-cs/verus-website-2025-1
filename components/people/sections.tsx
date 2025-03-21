"use client"

import { ProfileCard, ProfileCardProps } from "./profile-card"
import { CommunityList, CommunityListProps } from "./community-list"

// Combined team members data
const teamMembers: ProfileCardProps[] = [
  {
    name: "Michael J. Toutonghi",
    title: "Lead developer",
    description: "Former Vice President and Technical Fellow at Microsoft, recognized founder and architect of Microsoft's .Net platform, ex-Technical Fellow of Microsoft's advertising platform, ex-CTO, Parallels Corporation, experienced distributed computing and machine learning architect.",
    imageUrl: "/img/people/michaelj.jpg",
    twitterHandle: "MikeToutonghi"
  },
  {
    name: "Michael F. Toutonghi",
    title: "Lead desktop & mobile wallet developer",
    description: "Michael, the lead Verus GUI (Graphical User Interface) developer, has helped Verus set new standards in cryptocurrency ease of use on both Mobile and Desktop. Michael's passion for and understanding of user experience shows in Verus Desktop's user acclaimed design and implementation, which he works to improve and advance with every release.",
    imageUrl: "/img/people/michaelf.jpg",
    twitterHandle: "michaeltoutF"
  },
  {
    name: "Lex (Alex) English",
    title: "Developer / program manager",
    description: "Alex's background includes software development, system administration, and technical editing. He became a cryptocurrency user in 2012 and has followed the space since. Alex develops scripts to support community operations and works to coordinate effort within the Verus project and community.",
    imageUrl: "/img/people/alex.jpg",
    twitterHandle: "alexenglish"
  },
  {
    name: "Asher Dawes",
    title: "Developer",
    description: "Automation wizard extraordinaire, Asher keeps the Verus builds and backend test systems on track - Windows, Mac, Linux, and Android soon - Asher works tirelessly to automate builds and testing using github, gitlab, TravisCI, scripting and more as needed.",
    imageUrl: "/img/people/asher.jpg",
    twitterHandle: "asherdawes"
  },
  {
    name: "David Dawes",
    title: "Developer",
    description: "Decades of experience delivering successful products including real time financial engines moving billions of dollars in international remittances. Dave taught Mike assembly language over 30 years ago and has ensured that Verus Desktop can be used on all platforms.",
    imageUrl: "/img/people/david.jpg"
  },
  {
    name: "jl777",
    title: "Advisor",
    description: "jl777 is the lead developer of Komodo, Supernet, Marketmaker behind Barterdex, and a lot more. He's one of, if not the most productive devs in crypto. He's also one of our trusted advisers, and has added an invaluable technical and crypto-veteran perspective to our decision making.",
    imageUrl: "/img/people/jl777.jpg"
  },
  {
    name: "Nicholas Lyons",
    title: "Advisor",
    description: "Raised over US$92B in the Public and Private Equity Capital Markets. Director of Equity Capital Markets Syndication Robert Fleming. Head of Technology Private Placements Robert Fleming. VP Financial Sponsors Group ECM, JPMorgan. Head of UK Institutional Advisory PFG, JPMorgan. Co-Founder of Crescent. Technology & AdAstra Bayesian Machine Learning Systematic Hedge Fund (Sold to Aspect Capital). VALU & Arketyp is the third company Nicholas has founded or co-founded.",
    imageUrl: "/img/people/nicholas.jpg"
  },
  {
    name: "Oink",
    title: "Community support lead",
    description: "Exposed to computers at an early age, Oink acquired his skills quickly. Throughout his teenage years and adulthood he found himself continuously helping people with everything he could deepening his understanding of the barriers people experience in learning new technologies. His passion for helping people has influenced much of his life.",
    imageUrl: "/img/people/oink.jpg",
    twitterHandle: "oink_verus"
  },
  {
    name: "Max Theyse",
    title: "Lead design / community branding",
    description: "Experienced designer of brands and products. His passion is creating new products that use blockchain technology to move society to more decentralized structures. He enjoys finding the balance between goals, design, messaging, user experience, and technological capabilities.",
    imageUrl: "/img/people/max.jpg",
    twitterHandle: "M_eyse"
  },
  {
    name: "Chris Monkins",
    title: "Software engineer",
    description: "Chris started programming in the 80s as a hobbyist, then got his Bachelor of Engineering in Electronic and Electrical Engineering. He's been working on mining software for 4 years and works on Verus community mining and pool software.",
    imageUrl: "/img/people/max.jpg",
    twitterHandle: "monkins1010"
  }
]

// Data for community members (just names, no detailed profiles)
const communityMembers: CommunityListProps['members'] = [
  { name: "0x03" },
  { name: "aatthhyy" },
  { name: "Alright" },
  { name: "Godballz" },
  { name: "Crupti" },
  { name: "ctfu" },
  { name: "dk808" },
  { name: "Haruman" },
  { name: "heyrhett" },
  { name: "JQKiller" },
  { name: "KarelVMF" },
  { name: "kees" },
  { name: "manu71" },
  { name: "mrbkap" },
  { name: "PAIA" },
  { name: "VRSC Hunter" },
  { name: "XK721" },
  { name: "Zec_Empire" }
]

export function PeopleSections() {
  return (
    <div className="flex flex-col gap-12">
      {/* Team Members Section */}
      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
      
      {/* Community Members Section */}
      <div>
        <CommunityList members={communityMembers} />
      </div>
    </div>
  )
} 