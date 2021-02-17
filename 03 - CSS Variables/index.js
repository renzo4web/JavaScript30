const img = document.querySelector('img');
const controls = document.querySelectorAll('.controls input');

controls.forEach(control => control.addEventListener('input', handleInput));

function handleInput(event) {
  const idVarCss = event.currentTarget.id;
  const value = event.currentTarget.value;
  (idVarCss !== 'base') ?
      img.style.setProperty(`--${idVarCss}`,
          `${value}px`) :
      img.style.setProperty(`--${idVarCss}`,
          `${value}`);

}