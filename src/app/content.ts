import { pageType } from '../components/page/utils'
import { addHideActionAllShots } from '../components/page/interface'
import * as feed from '../components/page/feed/interface'
import * as profile from '../components/page/profile/interface'

let path = window.location.pathname
let type = pageType(path)

chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            console.log("We're in the injected content script!")

            switch (type) {
                case 'feed':
                    feed.rootHandler()
                    feed.updateUI()
                    addHideActionAllShots()
                    break;

                case 'profile':
                    profile.rootHandler()
                    profile.updateUI()
                    addHideActionAllShots()
                    break;
            
                default:
                    break;
            }            
        }
    })
})