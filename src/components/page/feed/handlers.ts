import * as $ from 'jquery'

import { addHideActionAllShots } from '../interface'
import { updateUI } from './interface'
import * as storageLocal from '../../storage/local'

export function root() {
    onHideClick()
    onNewShots()
}

// On icon click
function onHideClick() {
    $('.shots-grid').on('click', '#bettter-hide', (e) => {
        let shotThumbnail = $(e.currentTarget).closest('.shot-thumbnail')
        let shotHref = $(shotThumbnail).find('.shot-thumbnail-link').attr('href')
        let profileHref = $(shotThumbnail).find('.user-information').find('a:first').attr('href')
        
        let shotIdRe = /(?<=\/)([^\/]*?)(?=\-)/g
        let shotId = shotHref.match(shotIdRe)[0]
    
        let profileIdRe = /[^\/]*$/g
        let profileId = profileHref.match(profileIdRe)[0]
    
        let now = new Date()
        let date = now.toISOString()
    
        console.log('date:', date)
    
        // Remove shot
        shotThumbnail.remove()
    
        // Create shot object to store
        let shotData: Shot = {
            shot_id: shotId,
            timestamp: date
        }
    
        console.log('Shot data:', shotData)
    
        // Store shot in synced local storage
        storageLocal.storeShot(profileId, shotData)
            .then(() => {
                // Update UI
                console.log('second')
                updateUI()
            })
    })
}

function onNewShots() {
    // On scroll (when new shots are auto-loaded)
    let shotCountCurrent = 0
    
    $(document).on('scroll', () => {
        let grid = $('.shots-grid')
        let shotCountNew = grid.find('.shot-thumbnail').length
    
        if (shotCountNew > shotCountCurrent) {
            shotCountCurrent = shotCountNew
            updateUI()
            addHideActionAllShots()
        }
    })
}