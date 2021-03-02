const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

let isMouseDown = false;
let x, y;
let currentX = 0, currentY = 0;
ctx.lineWidth = 8;
direction = true;

const draw = (event) => {
  if (!isMouseDown) return;

  x = event.clientX - event.movementX;
  y = event.clientY - event.movementY;
  // (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) && ctx.lineWidth--;
  //
  // ctx.lineWidth++;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  console.log(ctx.lineWidth);

  hue = (hue >= 358) ? 0 : hue += 3;

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y); // Origin point
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};

let hue = Math.floor(Math.random() * 358);

const startDraw = () => {
  isMouseDown = true;
  hue = Math.floor(Math.random() * 358);
};

canvas.addEventListener('mousedown', startDraw);

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isMouseDown = false);

canvas.addEventListener('mouseout', () => isMouseDown = false);