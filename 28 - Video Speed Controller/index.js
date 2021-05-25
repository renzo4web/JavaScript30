const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('video');
let stopBar = false;

speed.addEventListener('click', (e) => {
  //   speedBar = true;
});

speed.addEventListener('mousemove', (e) => {
  if (stopBar) return;
  console.log('stopBar:', stopBar);
  console.log(e);

  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = `${Math.round(percent * 100)}%`;
  speedBar.style.height = height;
  const playbackRate = percent * (max - min) + min;
  speedBar.textContent = `${playbackRate.toFixed(2)}x`;
  console.log('percent:', percent);
  video.playbackRate = playbackRate.toFixed(2);
  console.log('y:', y);
});
