import * as localStorage from '../../storage/local'
import { removeProfileByID, removeShotByID } from '../utils'

export { root as rootHandler } from './handlers'

export function updateUI() {
    localStorage.getHiddenShots()
        .then(profiles => {
            for (const profile of profiles) {
                for (const shot of profile.hidden_shots) {
                    removeShotByID(shot.shot_id)
                }

                if (profile.is_hidden) {
                    removeProfileByID(profile.profile_id)
                }
            }
        })
}