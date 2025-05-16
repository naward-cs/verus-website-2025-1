'use client'

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import {BuildSection} from './BuildSection'
import {CommunitySection} from './CommunitySection'
import {LearnSection} from './LearnSection'
import {NavMenuItem} from './NavMenuItem'
import {UseSection} from './UseSection'

export function DesktopNav() {
  return (
    <nav className="ml-12 hidden items-center md:flex">
      <NavigationMenu delayDuration={0}>
        <NavigationMenuList className="gap-4">
          {/* Use Verus */}
          <NavMenuItem title="Use">
            <UseSection />
          </NavMenuItem>

          {/* Build with Verus */}
          <NavMenuItem title="Build">
            <BuildSection />
          </NavMenuItem>

          {/* Learn */}
          <NavMenuItem title="Learn">
            <LearnSection />
          </NavMenuItem>

          {/* Community */}
          <NavMenuItem title="Community">
            <CommunitySection />
          </NavMenuItem>

          {/* Media - Simple link */}
          <NavMenuItem title="Media" href="/media" />

          {/* Donate */}
          <NavMenuItem title="Donate" href="/donate" />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
