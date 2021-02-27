const clickWords = document.querySelectorAll('.panel');

clickWords.forEach(word => word.addEventListener('click', (event)=>{
  event.currentTarget.classList.toggle('open');
}));