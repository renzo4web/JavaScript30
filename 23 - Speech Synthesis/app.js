const synth = window.speechSynthesis;
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('input');
const textarea = document.querySelector('[name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const msg = new SpeechSynthesisUtterance(textarea.value);

const populateVoices = () => {
  // voices = speechSynthesis.getVoices().filter(({ lang }) => lang === 'es-ES');
  voices = speechSynthesis.getVoices().filter(({ lang }) => lang === 'en-US');
  voicesDropdown.innerHTML = voices.map((voice) => {
    return `<option value="1">${voice.name}</option>`;
  });
  console.log('voices:', voices);
};

speechSynthesis.addEventListener('voiceschanged', populateVoices);

const handClickSpeak = () => {
  msg.text = textarea.value;
  msg.voice = voices[0];
  synth.speak(msg);
};

const handleControls = ({ target }) => {
  console.log(target.name);
  console.log('target', target.value);
  msg[target.name] = target.value;
  synth.speak(msg);
};

const handleStop = () => {
  synth.cancel();
  console.log('synth:', synth);
};

speakButton.addEventListener('click', handClickSpeak);
stopButton.addEventListener('click', handleStop);
options.forEach((ctrl) => ctrl.addEventListener('input', handleControls));
