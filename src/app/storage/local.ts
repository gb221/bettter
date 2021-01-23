import { ChromeStorageKeys } from '../../types/enums'

export async function storeShot(profileId: Profile['profile_id'], shot: Shot) {
    console.log('Adding new shot ID:', shot.shot_id)
    
    getHiddenShots()
        .then(data => {
            let arr = data || []
        
            let match = arr.find(i => {
                return i.profile_id === profileId // Return if new shot already has a profile stored
            })
        
            if (match) {
                match.hidden_shots.push(shot)
            } else {
                let profile: Profile = {
                    profile_id: profileId,
                    hidden_shots: [
                        shot
                    ]
                }
        
                arr.push(profile)
            }
        
            return arr
        })
        .then(arr => {
            setHiddenShots(arr)
            console.log(`Shot ${shot.shot_id} saved.`)
        })
}

export async function getHiddenShots(): Promise<Profile[]> {
    return new Promise(function(resolve, reject){
        chrome.storage.sync.get(ChromeStorageKeys.HIDDEN_SHOTS, (result) => {
            console.log('Hidden shots retrieved:', result)
            resolve(result[ChromeStorageKeys.HIDDEN_SHOTS])
        })
    })
}

async function setHiddenShots(value: any): Promise<void> {
    return new Promise(function(resolve, reject){
        chrome.storage.sync.set({[ChromeStorageKeys.HIDDEN_SHOTS]: value}, () => {
            console.log('Hidden shots set to:', value)
            resolve()
        })
    })
}