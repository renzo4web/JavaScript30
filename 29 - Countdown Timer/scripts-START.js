const timerControls = document.querySelector('.timer__controls');
const display = {
    timeLeft: document.querySelector('.display .display__time-left'),
    timeEnd: document.querySelector('.display .display__end-time'),
};
const timer = {
    id: '',
    left: 0,
    end: 0,
    minutes: 0,
    seconds: 0
};

const inputMinutes = document.querySelector('input');
const formMinutes = document.querySelector('#custom');

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
        minutes = `0${minutes}`;
    }
    return `${minutes}:${seconds}`;
};

function immediateInterval(funcToRun, ms) {
    funcToRun();
    return setInterval(funcToRun, ms);
}


const formatCurrentHour = (str, ...values) => {

    let [hours, minutes] = values;


    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }

    return `Be Back At ${hours}:${Math.round(minutes)}`;
};

const setTimer = (timeBreak) => {

    const currentDate = new Date();

    const minutesEnd = currentDate.getMinutes() + timeBreak;
    display.timeEnd.textContent =
        formatCurrentHour`${currentDate.getHours()}:${minutesEnd}`;

    if (timeBreak < 1) {
        timer.minutes = 0;
        timer.seconds = 20;
    } else {
        timer.minutes = timeBreak - 1;
        timer.seconds = 60;
    }

    timer.id = immediateInterval(startTimerInterval, 1000);
};

const handleClickTimers = ({target: btn}) => {
    if (btn.tagName === "INPUT") return;
    clearInterval(timer.id);
    setTimer(convertSeconds(parseInt(btn.dataset.time)));
};


const startTimerInterval = () => {

    timer.seconds--;
    if (timer.seconds < 0) {
        timer.seconds = 59;
        timer.minutes--;
    }

    if (timer.minutes === 0 && timer.seconds === 0) clearInterval(timer.id);

    display.timeLeft.textContent = formatTime`${timer.minutes}:${timer.seconds}`;
};

const convertSeconds = (seconds) => {
    return seconds / 60;
};

timerControls.addEventListener('click', handleClickTimers);

const handleForm = (e) => {
    e.preventDefault();
    let minutes = inputMinutes.value;
    setTimer(parseInt(minutes));
};


formMinutes.addEventListener('submit', handleForm);