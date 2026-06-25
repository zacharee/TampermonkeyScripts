// ==UserScript==
// @name          vimeo-video-fit
// @namespace     https://zwander.dev
// @description   Makes the Vimeo video player bigger.
// @version       0.0.1
// @author        Zachary Wander <zachary@zwander.dev>
// @source        https://github.com/zacharee/TampermonkeyScripts/
// @updateURL     https://raw.githubusercontent.com/zacharee/TampermonkeyScripts/master/vimeo-video-fit/dist/vimeo-video-fit.user.js
// @downloadURL   https://raw.githubusercontent.com/zacharee/TampermonkeyScripts/master/vimeo-video-fit/dist/vimeo-video-fit.user.js
// @match         https://*.vimeo.com/*
// @run-at        document-end
// ==/UserScript==

(()=>{"use strict";(async function(){const n=document.createElement("style");n.id="vimeo-video-fit",document.head.appendChild(n),n.innerHTML='\ndiv.js-player_area-wrapper,\ndiv.player_area.js-player_area.js-player-fullscreen,\ndiv[class*="js-player_container"],\ndiv.player_area.is_mini .player_container,\ndiv.player_area.is_mini .player {\n    height: unset !important;\n    width: 90vw !important;\n    aspect-ratio: 16/9 !important;\n    max-height: unset !important;\n    max-width: inherit !important;\n}\n\ndiv.player_outro_area {\n    width: 100% !important;\n}\n\ndiv.js-player_area-wrapper {\n    margin: 0 auto !important;\n}\n\ndiv.player_area.js-player_area.js-player-fullscreen.is_mini {\n    top: unset !important;\n    z-index: unset !important;\n    display: unset !important;\n    box-shadow: unset !important;\n    position: unset !important;\n}\n\ndiv.is_mini .outro {\n    display: none !important;\n}\n'})().catch(n=>{console.log(n)})})();