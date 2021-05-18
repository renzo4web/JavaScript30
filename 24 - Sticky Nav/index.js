const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

let observer = new IntersectionObserver(
  () => {
    console.log('TOCA');
  },
  { threshold: 0.0 }
);

observer.observe(nav);

window.addEventListener('scroll', (e) => {
  if (window.scrollY >= topOfNav) {
    nav.classList.add('fixed');
    document.querySelector('.site-wrap').style.transform = 'scale(1)';
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    nav.classList.remove('fixed');
    document.body.style.paddingTop = `0px`;
    document.querySelector('.site-wrap').style.transform = 'scale(0.98)';
  }
});
