const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const elLocation = (element) => {
  let y =
    element.getBoundingClientRect().top +
    element.ownerDocument.defaultView.pageYOffset;
  let x =
    element.getBoundingClientRect().left +
    element.ownerDocument.defaultView.pageXOffset;
  highlight.style.transform = `translate(${x}px,${y}px)`;
};

const highlightLink = (elem) => {
  const { offsetWidth: width, offsetHeight: height } = elem.target;
  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;
  elLocation(elem.target);
};

links.forEach((link) => {
  link.addEventListener('mouseenter', highlightLink);
});
