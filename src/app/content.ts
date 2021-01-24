import '../components/ui/feed/handlers'
import '../components/ui/profile/handlers'

import { addHideActionAllShots } from '../components/ui/interface'
import * as feed from '../components/ui/feed/interface'

chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            console.log("We're in the injected content script!")

            // Update UI
            feed.updateUI()

            // Load up inital shot icons
            addHideActionAllShots()
        }
    })
})