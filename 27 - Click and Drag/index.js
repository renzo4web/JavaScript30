const itemsBox = document.querySelector('.items');
let isDown = false;
let startX, scrollLeft;

itemsBox.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - itemsBox.offsetLeft;
  scrollLeft = itemsBox.scrollLeft;
  itemsBox.classList.add('active');
});

itemsBox.addEventListener('mouseleave', (e) => {
  isDown = false;
  itemsBox.classList.remove('active');
});

itemsBox.addEventListener('mouseup', (e) => {
  isDown = false;
  itemsBox.classList.remove('active');
});

itemsBox.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - itemsBox.offsetLeft;

  const move = (x - startX) * 3;

  console.log({ startX, move });

  itemsBox.scrollLeft = scrollLeft - move;
});
