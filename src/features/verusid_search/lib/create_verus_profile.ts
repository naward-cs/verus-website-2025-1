//Import known vdxfid JSONs for profile
//TODO: need a way to either reverse vdxfid or
// a vdxfid library needs to be created

import CollectionsJSON from '@/data/vdxfid/collectionsJSON'
import IdentityJSON from '@/data/vdxfid/identityJSON'
import KeysJSON from '@/data/vdxfid/keysJSON'
import ServicesJSON from '@/data/vdxfid/servicesJSON'

//TODO: need to reverse vdxfid value instead of storing them all.
export type ProfileJSONType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: Record<string, any>
}
export const CreateProfile = (profileJSON?: ProfileJSONType) => {
  console.log(
    'CreateProfile: Starting profile creation',
    profileJSON ? 'with data' : 'with NO data'
  )

  if (!profileJSON) {
    console.error('CreateProfile: No profile JSON provided')
    return {}
  }

  const profile: {
    public?: ProfileJSONType
    services?: ProfileJSONType
    keys?: ProfileJSONType
    collections?: ProfileJSONType
  } = {}
  //First: Get identity information
  try {
    console.log(
      'CreateProfile: Processing identity information with keys:',
      Object.keys(IdentityJSON).join(', ')
    )

    for (const [key, value] of Object.entries(IdentityJSON)) {
      console.log(
        `CreateProfile: Checking for identity key ${key} with VDXFID ${value.vdxfid}`
      )

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (value.vdxfid && profileJSON[value.vdxfid]) {
        console.log(`CreateProfile: Found match for ${key}`)
        if (profile.public) {
          profile.public[key] = profileJSON[value.vdxfid]
        } else {
          profile.public = {}
          profile.public[key] = profileJSON[value.vdxfid]
        }
        delete profileJSON[value.vdxfid]
      }
    }

    //Second: Get services
    console.log('CreateProfile: Processing services')

    for (const [key, value] of Object.entries(ServicesJSON)) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (value.vdxfid && profileJSON[value.vdxfid]) {
        console.log(`CreateProfile: Found service ${key}`)
        if (profile.services) {
          profile.services[key] = profileJSON[value.vdxfid]
        } else {
          profile.services = {}
          profile.services[key] = profileJSON[value.vdxfid]
        }
        delete profileJSON[value.vdxfid]
      }
    }

    //Third: Get blockchain addresses
    console.log('CreateProfile: Processing blockchain keys')

    for (const [key, value] of Object.entries(KeysJSON)) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (value.vdxfid && profileJSON[value.vdxfid]) {
        console.log(`CreateProfile: Found key ${key}`)
        if (profile.keys) {
          profile.keys[key] = profileJSON[value.vdxfid]
        } else {
          profile.keys = {}
          profile.keys[key] = profileJSON[value.vdxfid]
        }
        delete profileJSON[value.vdxfid]
      }
    }

    //Lastly: Get collections to display
    console.log('CreateProfile: Processing collections')

    for (const [key, value] of Object.entries(CollectionsJSON)) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (value && value.vdxfid && profileJSON[value.vdxfid]) {
        console.log(`CreateProfile: Found collection ${key}`)
        if (profile.collections) {
          profile.collections[key] = profileJSON[value.vdxfid]
        } else {
          profile.collections = {}
          profile.collections[key] = profileJSON[value.vdxfid]
        }
        delete profileJSON[value.vdxfid]
      }
    }

    console.log(
      'CreateProfile: Final profile structure:',
      Object.keys(profile).join(', ')
    )
    return profile
  } catch (error) {
    console.error('CreateProfile error:', error)
    return profile
  }
}
