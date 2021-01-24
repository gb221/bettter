import * as localStorage from '../../storage/local'
import { HIDDEN_SHOT_THRESHOLD } from '../../../types/enums'
import { removeProfileByID, removeShotByID } from '../utils'

export function updateUI() {
    localStorage.getHiddenShots()
        .then(profiles => {
            for (const profile of profiles) {
                for (const shot of profile.hidden_shots) {
                    removeShotByID(shot.shot_id)
                }

                if (profile.hidden_shots.length >= HIDDEN_SHOT_THRESHOLD) {
                    removeProfileByID(profile.profile_id)
                }
            }
        })
}