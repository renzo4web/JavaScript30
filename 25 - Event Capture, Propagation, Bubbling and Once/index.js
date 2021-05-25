const divs = document.querySelectorAll('div');

function logText(div) {
  console.log(this);

  //   whithout bubleing
  //   div.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach((div) => {
  div.addEventListener('click', logText, { once: true });
});
