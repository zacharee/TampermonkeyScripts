const css = `
div.js-player_area-wrapper,
div.player_area.js-player_area.js-player-fullscreen,
div[class*="js-player_container"],
div.player_area.is_mini .player_container,
div.player_area.is_mini .player {
    height: unset !important;
    width: 90vw !important;
    aspect-ratio: 16/9 !important;
    max-height: unset !important;
    max-width: inherit !important;
}

div.player_outro_area {
    width: 100% !important;
}

div.js-player_area-wrapper {
    margin: 0 auto !important;
}

div.player_area.js-player_area.js-player-fullscreen.is_mini {
    top: unset !important;
    z-index: unset !important;
    display: unset !important;
    box-shadow: unset !important;
    position: unset !important;
}

div.is_mini .outro {
    display: none !important;
}
`;

async function main() {
  const style = document.createElement('style');
  style.id = 'vimeo-video-fit';
  document.head.appendChild(style);

  style.innerHTML = css;
}

main().catch((e) => {
  console.log(e);
});
