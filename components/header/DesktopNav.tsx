"use client"

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavMenuItem } from "./NavMenuItem"
import { UseSection } from "./UseSection"
import { BuildSection } from "./BuildSection"
import { LearnSection } from "./LearnSection"
import { CommunitySection } from "./CommunitySection"

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center ml-12">
      <NavigationMenu>
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
          <NavMenuItem title="Media" href="/#" />

          {/* Donate */}
          <NavMenuItem title="Donate" href="/#" />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
} 