// Brand assets component displaying logos, icons, and brand guidelines
"use client"

import Link from "next/link"
import { Download } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type AssetType = "logo" | "icon" | "banner"
type AssetColor = "blue" | "white"
type AssetFormat = "svg" | "png"

interface AssetProps {
  name: string
  type: AssetType
  color: AssetColor
  usage: string
  svgPath: string
  pngPath: string
  width: number
  height: number
}

const assets: AssetProps[] = [
  {
    name: "Horizontal blue logo",
    type: "logo",
    color: "blue",
    usage: "Default logo for light backgrounds",
    svgPath: "/img/media/verus-logo-blue.svg",
    pngPath: "/img/media/verus-logo-blue.png",
    width: 300,
    height: 100
  },
  {
    name: "Horizontal white logo",
    type: "logo", 
    color: "white",
    usage: "For dark backgrounds",
    svgPath: "/img/media/verus-logo-white.svg",
    pngPath: "/img/media/verus-logo-white.png",
    width: 300,
    height: 100
  },
  {
    name: "Icon blue",
    type: "icon",
    color: "blue",
    usage: "Default icon for light backgrounds",
    svgPath: "/img/media/verus-icon-blue.svg",
    pngPath: "/img/media/verus-icon-blue.png",
    width: 100,
    height: 100
  },
  {
    name: "Icon white",
    type: "icon",
    color: "white",
    usage: "For dark backgrounds",
    svgPath: "/img/media/verus-icon-white.svg",
    pngPath: "/img/media/verus-icon-white.png",
    width: 100,
    height: 100
  }
]

export function BrandAssets() {
  const [selectedType, setSelectedType] = useState<AssetType | "all">("all")
  
  const filteredAssets = selectedType === "all" 
    ? assets 
    : assets.filter(asset => asset.type === selectedType)
  
  return (
    <div className="px-4 md:px-0">
      <div className="mb-8 md:mb-12">
        <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
          Brand Assets
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 mt-2">
          Official Verus logos and icons for use in your projects, articles, and websites.
        </p>
        
        <Link 
          href="/verus-brand-assets.rar" 
          target="_blank"
          className="mt-4 flex items-center gap-2 text-verus-blue dark:text-blue-300 hover:underline"
        >
          <Download className="h-4 w-4" />
          <span>Download all Verus brand assets (.rar)</span>
        </Link>
      </div>
      
      {/* Asset type filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType("all")}
            className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors ${
              selectedType === "all" 
                ? "bg-verus-blue text-white dark:bg-blue-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All Assets
          </button>
          
          <button
            onClick={() => setSelectedType("logo")}
            className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors ${
              selectedType === "logo" 
                ? "bg-verus-blue text-white dark:bg-blue-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Logos
          </button>
          
          <button
            onClick={() => setSelectedType("icon")}
            className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors ${
              selectedType === "icon" 
                ? "bg-verus-blue text-white dark:bg-blue-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Icons
          </button>
        </div>
      </div>
      
      {/* Asset display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredAssets.map((asset, index) => (
          <div 
            key={index}
            className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm"
          >
            <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">
              {asset.name}
            </h3>
            
            <p className="text-[14px] text-gray-600 dark:text-gray-300 mb-4">
              {asset.usage}
            </p>
            
            <div className={`flex items-center justify-center py-8 px-6 mb-6 rounded-lg ${
              asset.color === "white" 
                ? "bg-gray-800" 
                : "bg-gray-100 dark:bg-gray-800"
            }`}>
              <div className="relative" style={{ width: asset.width, height: asset.height }}>
                <Image
                  src={asset.svgPath}
                  alt={asset.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Link 
                href={asset.svgPath} 
                target="_blank" 
                download
                className="h-[40px] px-6 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                SVG
              </Link>
              <Link 
                href={asset.pngPath} 
                target="_blank" 
                download
                className="h-[40px] px-6 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                PNG
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Brand Guidelines */}
      <div className="mt-12 mb-8 md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <h3 className="text-[18px] md:text-[22px] font-medium text-gray-900 dark:text-white mb-4">
          Brand Guidelines
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Do's section */}
          <div>
            <h4 className="text-[16px] font-medium text-green-600 dark:text-green-400 mb-3">
              Do's
            </h4>
            <ul className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-2 list-disc pl-5">
              <li>Use the blue logo on light backgrounds</li>
              <li>Use the white logo on dark backgrounds</li>
              <li>Maintain the logo's aspect ratio when resizing</li>
              <li>Allow adequate spacing around the logo</li>
              <li>Use the SVG format when possible for best quality</li>
            </ul>
          </div>
          
          {/* Don'ts section */}
          <div>
            <h4 className="text-[16px] font-medium text-red-600 dark:text-red-400 mb-3">
              Don'ts
            </h4>
            <ul className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 space-y-2 list-disc pl-5">
              <li>Don't deform or skew the logo</li>
              <li>Don't use the blue logo on dark backgrounds</li>
              <li>Don't use the white logo on light backgrounds</li>
              <li>Don't alter the colors of the logo</li>
              <li>Don't add effects like shadows or outlines to the logo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 