const main = document.querySelector('.hero');
const text = document.querySelector('.hero h1');

console.log(main);
main.addEventListener('mouseover', (e) => {
  console.log(e.offsetX);
  /// * color | offset-x | offset-y | blur-radius */
  text.style.textShadow  = ""
});
