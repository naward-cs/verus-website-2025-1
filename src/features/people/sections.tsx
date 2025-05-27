import {communityMembers} from '@/data/people/community-members'
import {teamMembers} from '@/data/people/team-members'

import {CommunityList} from './community-list'
import {ProfileCard} from './profile-card'

export function PeopleSections() {
  return (
    <div className="flex flex-col gap-16">
      {/* Team Members Section */}
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
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
