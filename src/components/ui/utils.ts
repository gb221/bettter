import * as $ from 'jquery'

export function checkHasHideAction(shotActionList: JQuery<HTMLLIElement>) {
    for (const action of shotActionList) {
        if ($(action).find('a').attr('id') === 'bettter-hide') {
            return true
        }
    }
}

export function removeShotByID(shotID: Shot['shot_id']) {
    $(`li#screenshot-${shotID}`).remove()
}

export function removeProfileByID(profileID: Profile['profile_id']) {
    let profileInfos = $('.shot-thumbnail').find('.user-information')
    
    for (const profile of profileInfos) {
        console.log('profile', profile)
        
        let href = $(profile).find('a:first').attr('href')
        console.log('href', href)

        let re = /[^\/]*$/g
        let id = href.match(re)[0]

        if (id === profileID) {
            let thumbnail = $(profile).closest('.shot-thumbnail')
            thumbnail.remove()
        }
    }
}