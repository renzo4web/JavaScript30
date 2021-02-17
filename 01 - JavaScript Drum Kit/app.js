const drumBtns = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio');
let currentEvent;

drumBtns.forEach(btn => btn.addEventListener('click', handleEvent));
window.addEventListener('keydown', handleEvent);

function handleEvent(event) {

  event.type === 'keydown'
      ? currentEvent = event.key.toUpperCase()
      : currentEvent = event.currentTarget.dataset.key;

  let currentAudio;

  sounds.forEach(audio => {
    if (audio.dataset.key === currentEvent) currentAudio = audio;
  });

  drumBtns.forEach(btn => {
    btn.classList.remove('playing');// clear previous btn with style
    (btn.dataset.key === currentEvent) && btn.classList.add('playing');
  });

  try {
    currentAudio.cloneNode().play();
  } catch (e) {
    // When other key is pressed
  }

}

