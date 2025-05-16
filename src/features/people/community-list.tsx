// Component to display community members in a grid
type CommunityMember = {
  name: string
}

export type CommunityListProps = {
  members: CommunityMember[]
}

export function CommunityList({members}: CommunityListProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <div className="relative">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="rounded-xl border border-blue-100/60 bg-white/80 p-3 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50"
            >
              <p className="truncate text-[14px] text-gray-700 dark:text-gray-300 md:text-[15px]">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
