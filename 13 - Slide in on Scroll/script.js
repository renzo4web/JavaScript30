const images = document.querySelectorAll('img');

const callback = (entries, observer) => {
  entries.forEach(entry => {
    (entry.isIntersecting)
        ? entry.target.classList.add('active')
        : entry.target.classList.remove('active');
  });
};

let observer = new IntersectionObserver(callback, {
  threshold: 0.5,
});

window.addEventListener('scroll', (e) => {

  images.forEach(img => observer.observe(img));

});