const secondHand = document.querySelector('.second-hand'),
    minHand = document.querySelector('.min-hand'),
    hourHand = document.querySelector('.hour-hand');

let time;

const hand = document.querySelector('.hand');
hand.style.transform = 'rotate(90deg)';

function seconds() {
  time = new Date();
  console.log(time.getMinutes());
  console.log(time.getHours());

  const secondsDegress = (time.getSeconds() / 60) * 360;
  const minDegress = (time.getMinutes() / 60) * 360;
  const hoursDegress = (time.getHours() / 12) * 360;

  hourHand.style.transform = `rotate(${hoursDegress+90 }deg)`;
  minHand.style.transform = `rotate(${minDegress+90 }deg)`;
  secondHand.style.transform = `rotate(${secondsDegress+90}deg)`;
}

immediateInterval(seconds, 1000);

function immediateInterval(funcToRun, ms) {
  funcToRun();
  return setInterval(funcToRun, ms);
}