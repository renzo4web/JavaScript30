const timerControls = document.querySelector('.timer__controls');
const display = {
  timeLeft: document.querySelector('.display .display__time-left'),
  timeEnd: document.querySelector('.display .display__end-time'),
};
const timer = {
  id: '',
  left: 0,
  end: 0,
};

const formatTime = (str, ...values) => {
  let [minutes, seconds] = values;

  if (seconds > 60) {
    seconds -= 60;
    minutes += 1;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minute = `0${minutes}`;
  }

  return `Be Back At ${minutes}:${seconds}`;
};

const handleClickTimers = ({ target: btn }) => {
  clearInterval(timer.id);

  const timeBreak = btn.dataset.time;

  const currentDate = new Date();

  display.timeEnd.textContent = formatTime`${currentDate.getHours()}:${
    currentDate.getMinutes() + timeBreak / 60
  }`;

  timer.id = setInterval(() => {
    console.log(timeBreak);
  }, timeBreak);
};

timerControls.addEventListener('click', handleClickTimers);
