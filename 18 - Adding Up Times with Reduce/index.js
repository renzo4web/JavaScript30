const videoTimes = Array.from(document.querySelectorAll('li')).
    map(el => (el.dataset.time.split(':'))).
    map(time => {
      const [min, sec] = time.map(parseFloat);
      return (min * 60) + sec;
    });

const sumSecs = videoTimes.reduce((acc, sec) => acc + sec);

const secsToMinHrs = (secs) => {
  let sec = secs;
  const hour = Math.floor(sec / 3600);
  sec %= 3600;
  const min = Math.floor(sec / 60);
  sec %= 60;
  return [hour, min, sec].join(":");
};

console.log(secsToMinHrs(sumSecs));
