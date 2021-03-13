let g = [];
const container = document.querySelector('.container');
const secret = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'];

// ↑ ↑ ↓ ↓ ← → ← → B A

window.addEventListener('keydown', (e) => {
  if (g.length > 10) {
    g = []
   container.textContent = ""
  }
  console.log(g);
  if (g.length <= 10) {
    switch (e.key) {
      case  'ArrowUp':
        container.textContent += '⬆';
        break;
      case  'ArrowDown':
        container.textContent += '⬇';
        break;
      case  'ArrowRight':
        container.textContent += '➡';
        break;
      case  'ArrowLeft':
        container.textContent += '⬅';
        break;
      case  'a':
        container.textContent += '🅰';
        break;
      case  'b':
        container.textContent += '🅱';
        break;
    }
    g.push(e.key);
  }

  if (g.length === 10) {
    return g.every((el, i) => el === secret[i]);
  }

});