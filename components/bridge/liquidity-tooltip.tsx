"use client"

import { HelpCircle } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface LiquidityTooltipProps {
  content: string
}

export function LiquidityTooltip({ content }: LiquidityTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <HelpCircle className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}