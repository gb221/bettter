import '../components/ui/feed/handlers'
import '../components/ui/profile/handlers'

import { addHideActionAllShots, updateUI } from '../components/ui/interface'

chrome.runtime.sendMessage({}, (response) => {
    var checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            console.log("We're in the injected content script!")

            // Update UI
            updateUI()

            // Load up inital shot icons
            addHideActionAllShots()
        }
    })
})