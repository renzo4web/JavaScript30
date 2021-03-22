const main = document.querySelector(".hero");
const text = document.querySelector(".hero h1");
const walk = 100;
console.log(main);

const generateShadow = (e) => {
  const { offsetHeight: height, offsetWidth: width } = main;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;
  /// * color | offset-x | offset-y | blur-radius */
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgb(255, 0, 0),
  ${yWalk}px ${xWalk}px 0 rgb(118, 255, 0),
  ${xWalk * -1}px ${yWalk * -1}px 0 rgb(8, 0, 255)
  `;
};

main.addEventListener("mousemove", generateShadow);
