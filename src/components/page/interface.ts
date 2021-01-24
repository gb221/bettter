import * as $ from 'jquery'

import { checkHasHideAction } from './utils'

// Hide icon html
let html = `
    <li data-bucket-container="true" class="shot-action">
        <a class="bucket-shot form-btn" title="Hide shot" id="bettter-hide">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon">
                <path d="M20 0H4C1.7904 0 0 1.7908 0 4V20C0 22.2092 1.7908 24 4 24H20C22.2092 24 24 22.2092 24 20V4C24 1.7908 22.2092 0 20 0ZM19.1992 16.3196L16.3196 19.2L11.9992 14.8796L7.68 19.2L4.7996 16.3196L9.1196 12L4.7996 7.6796L7.68 4.8L11.9992 9.1196L16.3196 4.8L19.1992 7.6796L14.8796 12L19.1992 16.3196Z" fill="#6B6A77"/>
            </svg>
        </a>
    </li>
`

export function addHideActionAllShots() {
    // Find all shot previews
    let shots = $('.shot-thumbnail')

    // Add hide icon to shot's action list container
    for (const shot of shots) {
        let actionList = $(shot).find('.shot-thumbnail-overlay-content').find('ul')
        let actions = actionList.find('li')

        if (!checkHasHideAction(actions)) {
            actionList.prepend(html)       
        }

    }
}