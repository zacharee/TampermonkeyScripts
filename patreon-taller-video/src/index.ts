import 'arrive';

async function main() {
  if (window.location.pathname.includes('posts/')) {
    editVideoPlayer();
  }

  navigation.addEventListener('navigate', (event) => {
    const destUrl = new URL(event.destination.url);

    if (destUrl.pathname.includes('posts/')) {
      editVideoPlayer();
    }
  });
}

function editVideoPlayer() {
  document.arrive("video", {existing: true, fireOnAttributesModification: true}, (elem) => {
    const paddingDiv = elem.parentNode?.parentNode?.parentElement;

    if (paddingDiv) {
      paddingDiv.style.paddingTop = '50%';
    }
  });
}

main().catch((e) => {
  console.log(e);
});
