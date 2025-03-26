// Brand assets component displaying logos, icons, and brand guidelines
"use client"

import Link from "next/link"
import { Download } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type AssetType = "logo" | "icon" | "wallpaper"
type AssetColor = "blue" | "white" | "light" | "dark"
type AssetFormat = "svg" | "png"

interface AssetProps {
  name: string
  type: AssetType
  color: AssetColor
  usage: string
  svgPath?: string
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
    svgPath: "/img/brand-assets/verus-logo-blue.svg",
    pngPath: "/img/brand-assets/verus-logo-blue.png",
    width: 300,
    height: 100
  },
  {
    name: "Horizontal white logo",
    type: "logo", 
    color: "white",
    usage: "For dark backgrounds",
    svgPath: "/img/brand-assets/verus-logo-white.svg",
    pngPath: "/img/brand-assets/verus-logo-white.png",
    width: 300,
    height: 100
  },
  {
    name: "Icon blue",
    type: "icon",
    color: "blue",
    usage: "Default icon for light backgrounds",
    svgPath: "/img/brand-assets/verus-icon-blue.svg",
    pngPath: "/img/brand-assets/verus-icon-blue.png",
    width: 100,
    height: 100
  },
  {
    name: "Icon white",
    type: "icon",
    color: "white",
    usage: "For dark backgrounds",
    svgPath: "/img/brand-assets/verus-icon-white.svg",
    pngPath: "/img/brand-assets/verus-icon-white.png",
    width: 100,
    height: 100
  },
  {
    name: "Desktop Wallpaper - Logo Dark",
    type: "wallpaper",
    color: "dark",
    usage: "Desktop wallpaper with Verus logo on dark background",
    pngPath: "/img/brand-assets/desktop-wallpaper-verus-logo-dark.png",
    width: 400,
    height: 225 // 16:9 aspect ratio
  },
  {
    name: "Desktop Wallpaper - Logo Light",
    type: "wallpaper",
    color: "light",
    usage: "Desktop wallpaper with Verus logo on light background",
    pngPath: "/img/brand-assets/desktop-wallpaper-verus-logo-light.png",
    width: 400,
    height: 225 // 16:9 aspect ratio
  },
  {
    name: "Desktop Wallpaper - Tagline Dark",
    type: "wallpaper",
    color: "dark",
    usage: "Desktop wallpaper with Verus logo and tagline on dark background",
    pngPath: "/img/brand-assets/desktop-wallpaper-verus-tagline-dark.png",
    width: 400,
    height: 225 // 16:9 aspect ratio
  },
  {
    name: "Desktop Wallpaper - Tagline Light",
    type: "wallpaper",
    color: "light",
    usage: "Desktop wallpaper with Verus logo and tagline on light background",
    pngPath: "/img/brand-assets/desktop-wallpaper-verus-tagline-light.png",
    width: 400,
    height: 225 // 16:9 aspect ratio
  }
]

export function BrandAssets() {
  const [selectedType, setSelectedType] = useState<AssetType | "all">("all")
  
  // Separate assets by type
  const logoAndIconAssets = assets.filter(asset => asset.type === "logo" || asset.type === "icon")
  const wallpaperAssets = assets.filter(asset => asset.type === "wallpaper")
  
  // Filter assets based on selection
  const filteredLogoIconAssets = selectedType === "all" || selectedType === "logo" || selectedType === "icon"
    ? logoAndIconAssets.filter(asset => selectedType === "all" || asset.type === selectedType)
    : []
    
  const filteredWallpaperAssets = selectedType === "all" || selectedType === "wallpaper"
    ? wallpaperAssets
    : []
  
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
          href="/img/brand-assets/brand-assets.zip" 
          target="_blank"
          className="mt-4 flex items-center gap-2 text-verus-blue dark:text-blue-300 hover:underline"
        >
          <Download className="h-4 w-4" />
          <span>Download all Verus brand assets (.zip)</span>
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
          
          <button
            onClick={() => setSelectedType("wallpaper")}
            className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors ${
              selectedType === "wallpaper" 
                ? "bg-verus-blue text-white dark:bg-blue-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Wallpapers
          </button>
        </div>
      </div>
      
      {/* Section 1: Logos and Icons */}
      {filteredLogoIconAssets.length > 0 && (
        <>
          <div className="mb-6">
            <h3 className="text-[18px] md:text-[24px] font-medium text-gray-900 dark:text-white">
              Logos & Icons
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredLogoIconAssets.map((asset, index) => (
              <div 
                key={`logo-icon-${index}`}
                className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm"
              >
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                  {asset.name}
                </h3>
                
                <p className="text-[14px] text-gray-600 dark:text-gray-300 mb-4">
                  {asset.usage}
                </p>
                
                <div className={`flex items-center justify-center py-8 px-6 mb-6 rounded-lg ${
                  asset.color === "white" || asset.color === "dark"
                    ? "bg-gray-800" 
                    : "bg-gray-100"
                }`}>
                  <div className="relative" style={{ width: asset.width, height: asset.height }}>
                    <Image
                      src={asset.svgPath || asset.pngPath}
                      alt={asset.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {asset.svgPath && (
                    <Link 
                      href={asset.svgPath} 
                      target="_blank" 
                      download
                      className="h-[40px] px-6 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                    >
                      SVG
                    </Link>
                  )}
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
        </>
      )}
      
      {/* Section 2: Brand Guidelines */}
      {(selectedType === "all" || selectedType === "logo" || selectedType === "icon") && (
        <div className="mb-12 md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
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
                <li>Use the white logo on very dark backgrounds</li>
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
                <li>Don't use the white logo on light backgrounds</li>
                <li>Don't add effects like shadows or outlines to the logo</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Section 3: Wallpapers */}
      {filteredWallpaperAssets.length > 0 && (
        <>
          <div className="mb-6">
            <h3 className="text-[18px] md:text-[24px] font-medium text-gray-900 dark:text-white">
              Desktop Wallpapers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWallpaperAssets.map((asset, index) => (
              <div 
                key={`wallpaper-${index}`}
                className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 shadow-sm"
              >
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">
                  {asset.name}
                </h3>
                
                <p className="text-[14px] text-gray-600 dark:text-gray-300 mb-4">
                  {asset.usage}
                </p>
                
                <div className="mb-6 overflow-hidden rounded-lg">
                  <div className="relative" style={{ width: '100%', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
                    <Image
                      src={asset.pngPath}
                      alt={asset.name}
                      layout="fill"
                      objectFit="cover"
                      quality={60} // Lower quality for preview to reduce file size
                      priority={false} // Enable lazy loading
                    />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Link 
                    href={asset.pngPath} 
                    target="_blank" 
                    download
                    className="h-[40px] px-6 backdrop-blur-sm rounded-lg text-[14px] font-medium flex items-center justify-center transition-all duration-300 bg-verus-blue hover:bg-blue-700 text-white border border-blue-600 hover:border-blue-700 flex-1"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Wallpaper
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
} 