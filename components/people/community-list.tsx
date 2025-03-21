// Component to display community members in a grid
"use client"

type CommunityMember = {
  name: string
}

export type CommunityListProps = {
  members: CommunityMember[]
}

export function CommunityList({ members }: CommunityListProps) {
  return (
    <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="relative">
        
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <div 
              key={index}
              className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-blue-100/60 dark:border-blue-900/20"
            >
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 truncate">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 