//Import known vdxfid JSONs for profile
//TODO: need a way to either reverse vdxfid or
// a vdxfid library needs to be created
import CollectionsJSON from '@/data/collectionsJSON'
import IdentityJSON from '@/data/identityJSON'
import KeysJSON from '@/data/keysJSON'
import ServicesJSON from '@/data/servicesJSON'

//TODO: need to reverse vdxfid value instead of storing them all.

const CreateProfile = (profileJSON) => {
  console.log(
    'CreateProfile: Starting profile creation',
    profileJSON ? 'with data' : 'with NO data'
  )

  if (!profileJSON) {
    console.error('CreateProfile: No profile JSON provided')
    return {}
  }

  let profile = {}
  //First: Get identity information
  try {
    console.log(
      'CreateProfile: Processing identity information with keys:',
      IdentityJSON
        ? Object.keys(IdentityJSON).join(', ')
        : 'NO IDENTITY JSON AVAILABLE'
    )

    if (!IdentityJSON) {
      throw new Error('IdentityJSON not available')
    }

    for (const [key, value] of Object.entries(IdentityJSON)) {
      console.log(
        `CreateProfile: Checking for identity key ${key} with VDXFID ${value?.vdxfid}`
      )
      if (value && value.vdxfid && profileJSON[value.vdxfid]) {
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
    if (ServicesJSON) {
      for (const [key, value] of Object.entries(ServicesJSON)) {
        if (value && value.vdxfid && profileJSON[value.vdxfid]) {
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
    }

    //Third: Get blockchain addresses
    console.log('CreateProfile: Processing blockchain keys')
    if (KeysJSON) {
      for (const [key, value] of Object.entries(KeysJSON)) {
        if (value && value.vdxfid && profileJSON[value.vdxfid]) {
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
    }

    //Lastly: Get collections to display
    console.log('CreateProfile: Processing collections')
    if (CollectionsJSON) {
      for (const [key, value] of Object.entries(CollectionsJSON)) {
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

export default CreateProfile
