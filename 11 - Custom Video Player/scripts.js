console.log(playBtn);

const playPauseVideo = (bool) => {
  playBtn.textContent = bool ? '❚ ❚' : '►';
  bool ? video.play() : video.pause();
};

playBtn.addEventListener('click', () => {
  playPauseVideo(video.paused);
});

sliderVol.addEventListener('input', () => {
  console.log(sliderVol.value);
  video.volume = parseFloat(sliderVol.value);
});

playbackRate.addEventListener('input', () => {
  console.log(playbackRate.value);
  video.playbackRate = playbackRate.value;
});

const forwardOrRewind = (data) => {
  data == 25
    ? (video.currentTime += parseInt(data))
    : (video.currentTime -= Math.abs(parseInt(data)));
};

playerBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    forwardOrRewind(btn.getAttribute('data-skip'));
  })
);

const fillingProBar = (slider) => {
  // if (slider) {
  //   progressFilled.style.flexBasis = `${((slider-50) * 100) / video.duration}%`;
  //   return
  // }
  progressFilled.style.flexBasis = `${
    (video.currentTime * 100) / video.duration
  }%`;
};

video.addEventListener('timeupdate', fillingProBar);

let mousedown = false;
progressBar.addEventListener('mousedown', () => {
  mousedown = true;
});

progressBar.addEventListener('mousemove', (e) => {
  if (mousedown) {
    video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration ;
    fillingProBar();
  }
});

progressBar.addEventListener('mouseup', () => {
  video.currentTime =
    (parseInt(progressFilled.style.flexBasis) * video.duration) / 100;
  mousedown = false;
});
