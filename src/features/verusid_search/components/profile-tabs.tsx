import type {ReactNode} from 'react'
import type {ProfileJSONType} from '@/features/verusid_search/lib/create_verus_profile'
import type {VerusID} from '@/features/verusid_search/server/fetch_verus_id'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {ProfileContent} from './profile-content'

export default function ProfileTabs({
  profile,
  profileData,
}: {
  profile: VerusID
  profileData:
    | {
        public?: ProfileJSONType
        services?: ProfileJSONType
        keys?: ProfileJSONType
        collections?: ProfileJSONType
      }
    | undefined
}) {
  const identity = profile.identity
  const tabs = [
    {id: 'profile', label: 'Profile'},
    {id: 'services', label: 'Services', disabled: !profileData?.services},
    {id: 'keys', label: 'Blockchain Keys', disabled: !profileData?.keys},
    {id: 'collections', label: 'Content', disabled: !profileData?.collections},
  ]
  console.log(profileData)
  return (
    <Tabs defaultValue="profile">
      <TabsList className="justify-left h-auto w-full justify-start border-b border-t border-blue-100/80 p-0 dark:border-blue-900/30">
        {tabs.map((tab, i) => (
          <TabsTrigger
            key={`${i}-${tab.id}-profile`}
            value={tab.id}
            disabled={tab.disabled}
            className="cursor-pointer whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 data-[state=active]:dark:text-blue-400"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {/* Profile Tab */}
      <ProfileTabContent value="profile">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Identity Information
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoItem label="Name" value={identity.name} />
          <InfoItem label="Identity Address" value={identity.identityaddress} />
          <InfoItem
            label="Primary Address"
            value={identity.primaryaddresses[0]}
          />
        </div>
      </ProfileTabContent>
      {/* Services Tab */}
      <ProfileTabContent value="services">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Services
        </h3>
        <div className="space-y-4">
          {Object.entries(profileData?.services || {}).map(
            ([serviceKey, serviceData], i) => (
              <ContentCard
                key={`${i}-${serviceKey}-service-item`}
                title={serviceData.name || serviceKey}
              >
                {Object.entries(serviceData).map(([service, value], i) => {
                  if (service !== 'name' && service !== 'qualifiedname') {
                    return (
                      <div
                        key={`${i}-sub-contentcard-data`}
                        className="mt-2 flex w-full flex-col truncate text-sm"
                      >
                        {typeof value === 'string' &&
                        value.startsWith('http') ? (
                          <div className="flex w-full flex-row gap-2">
                            <p>Link:</p>
                            <a
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="min-w-0 truncate text-blue-600 hover:underline dark:text-blue-400"
                            >
                              {value}
                            </a>
                          </div>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">
                            {service === 'accountid' && <>Id: </>}
                            {service === 'accountname' && <>Name: </>}
                            {String(value)}
                          </p>
                        )}
                      </div>
                    )
                  }
                  return null
                })}
              </ContentCard>
            )
          )}
        </div>
      </ProfileTabContent>
      {/* Blockchain keys Tab */}
      <ProfileTabContent value="keys">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Blockchain Keys
        </h3>
        <div className="space-y-4">
          {Object.entries(profileData?.keys || {}).map(
            ([blockchainKey, blockchainData], i) => (
              <ContentCard key={`${i}-${blockchainKey}`} title={blockchainKey}>
                {blockchainData.address && (
                  <p className="mt-1 break-all">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Address:{' '}
                    </span>
                    <span className="text-gray-900 dark:text-gray-100">
                      {blockchainData.address}
                    </span>
                  </p>
                )}
              </ContentCard>
            )
          )}
        </div>
      </ProfileTabContent>
      <ProfileTabContent value="collections">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Content
        </h3>
        <div className="space-y-6">
          <ContentCard>
            <ProfileContent
              content={profileData?.collections?.content.content}
            />
          </ContentCard>
        </div>
      </ProfileTabContent>
    </Tabs>
  )
}

function ProfileTabContent({
  children,
  value,
}: {
  children: ReactNode
  value: string
}) {
  return (
    <TabsContent value={value} className="mt-0 p-6">
      {children}
    </TabsContent>
  )
}

function InfoItem({label, value}: {label: string; value?: string}) {
  if (!value) return null

  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="break-all text-gray-900 dark:text-gray-100">
        {value}
      </span>
    </div>
  )
}

function ContentCard({title, children}: {title?: string; children: ReactNode}) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-gray-100/80 bg-gray-50/80 p-4 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/60">
      {title && (
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
      )}
      {children}
    </div>
  )
}
