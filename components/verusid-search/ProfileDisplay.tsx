"use client"

import { useState } from 'react'
import { VerusResult } from '@/components/VerusIdProfile/ProfileTypes'
import { ProfileContent } from './ProfileContent'
import { VerifiedSocialLinks } from './VerifiedSocialLinks'
import { VerifiedCryptoAddresses } from './VerifiedCryptoAddresses'

interface ProfileDisplayProps {
  profileData: VerusResult | null
  isLoading: boolean
  error: string | null
}

export function ProfileDisplay({ profileData, isLoading, error }: ProfileDisplayProps) {
  const [activeTab, setActiveTab] = useState('profile')

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-100/80 dark:border-blue-900/30 shadow-sm">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading profile data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50/70 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg p-6 text-red-700 dark:text-red-300 backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-2">Error</h3>
        <p>{error}</p>
      </div>
    )
  }

  if (!profileData || !profileData.result) {
    return null
  }

  const { result, profileJSON, id } = profileData
  const identity = result?.identity || {}
  const userId = id || 'unknown'  // Ensure userId is always a string

  // Cast to any to avoid TypeScript errors with complex nested structures
  // In a production environment, you would create more comprehensive type definitions
  const profile = profileJSON as any
  
  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'services', label: 'Services', disabled: !profile?.services },
    { id: 'keys', label: 'Blockchain Keys', disabled: !profile?.keys },
    { id: 'collections', label: 'Content', disabled: !profile?.collections },
  ]

  return (
    <div className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-800/90 rounded-xl border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] overflow-hidden backdrop-blur-sm">
      {/* Header with Banner Image */}
      <div className="relative">
        {/* Profile Banner */}
        <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-indigo-600 overflow-hidden">
          {profile?.public?.header?.image ? (
            <img 
              src={profile.public.header.image} 
              alt="Profile header"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          )}
        </div>
        
        {/* Profile Picture (overlaying banner) */}
        <div className="absolute left-6 -bottom-16">
          {profile?.public?.avatar?.image ? (
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md bg-white">
              <img 
                src={profile.public.avatar.image} 
                alt={`${identity.name} avatar`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-md">
              <span className="text-3xl font-bold text-gray-600 dark:text-gray-300">
                {identity.name?.slice(0, 2)?.toUpperCase() || 'ID'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Profile Info (with space for the overlapping profile picture) */}
      <div className="pt-20 px-6 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{identity.name}</h2>
          <p className="text-gray-500 dark:text-gray-400">
            {identity.fullyqualifiedname || identity.friendlyname || id}
          </p>
          {profile?.public?.about?.text && (
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              {profile.public.about.text}
            </p>
          )}
          
          {/* Social Links & Crypto Addresses */}
          <div className="mt-4 space-y-4">
            {/* Display social links if available */}
            {profile?.services && (
              <div>
                <VerifiedSocialLinks services={profile.services} userId={userId} />
              </div>
            )}
            
            {/* Display crypto addresses if available */}
            {profile?.keys && (
              <div>
                <VerifiedCryptoAddresses 
                  keys={profile.keys} 
                  userId={userId} 
                  onClickMore={() => setActiveTab('keys')} 
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-b border-blue-100/80 dark:border-blue-900/30">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              disabled={tab.disabled}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              } ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Identity Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem label="Name" value={identity.name} />
                <InfoItem label="Identity Address" value={identity.identityaddress} />
                <InfoItem label="Primary Address" value={identity.primaryaddresses?.[0]} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && profile?.services && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h3>
            <div className="space-y-4">
              {Object.entries(profile.services).map(([key, service]: [string, any]) => (
                <div key={key} className="bg-gray-50/80 dark:bg-gray-800/60 p-4 rounded-lg border border-gray-100/80 dark:border-gray-700/50 shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white">{service.name || key}</h4>
                  {Object.entries(service).map(([serviceKey, value]: [string, any]) => {
                    if (serviceKey !== 'name' && serviceKey !== 'qualifiedname') {
                      return (
                        <div key={serviceKey} className="mt-2 text-sm">
                          {typeof value === 'string' && value.startsWith('http') ? (
                            <a 
                              href={value} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300">{String(value)}</p>
                          )}
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'keys' && profile?.keys && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Blockchain Keys</h3>
            <div className="space-y-4">
              {Object.entries(profile.keys).map(([key, keyData]: [string, any]) => (
                <div key={key} className="bg-gray-50/80 dark:bg-gray-800/60 p-4 rounded-lg border border-gray-100/80 dark:border-gray-700/50 shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white">{key}</h4>
                  {keyData.address && (
                    <div className="mt-1 break-all">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Address: </span>
                      <span className="text-gray-900 dark:text-gray-100">{keyData.address}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'collections' && profile?.collections && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Content</h3>
            <div className="space-y-6">
              {Object.entries(profile.collections).map(([key, collection]: [string, any]) => (
                <div key={key} className="bg-gray-50 dark:bg-gray-800/60 p-6 rounded-lg border border-gray-100 dark:border-gray-700/50 shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 text-lg capitalize">{key}</h4>
                  {collection.content && Array.isArray(collection.content) ? (
                    <ProfileContent content={collection.content} />
                  ) : (
                    <div className="text-gray-500 dark:text-gray-400 italic">
                      No content items available
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-gray-900 dark:text-gray-100 break-all">{value}</span>
    </div>
  )
} 