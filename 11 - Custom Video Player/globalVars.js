const playBtn = document.querySelector('button[title ="Toggle Play"]');
const sliderVol = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const playerBtn = document.querySelectorAll(
  'button:not([title ="Toggle Play"]) '
);
const video = document.querySelector('video');
const progressFilled = document.querySelector('.progress__filled');
