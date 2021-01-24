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
        let href = $(profile).find('a:first').attr('href')

        let re = /[^\/]*$/g
        let id = href.match(re)[0]

        if (id === profileID) {
            let thumbnail = $(profile).closest('.shot-thumbnail')
            thumbnail.remove()
        }
    }
}

export function pageType(path: string): 'feed' | 'profile' | 'shot' {
    if (path === '/') {
        return 'feed'
    }

    let folders = path.split('/')

    if (folders[1] === 'shots' && !isNaN(parseInt(folders[2]))) {
        return 'shot'
    } else if (folders[1] === 'shots') {
        return 'feed'
    } else {
        return 'profile'
    }
}