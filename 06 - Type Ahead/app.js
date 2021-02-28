const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
let dataJson;

async function fetchData() {
  return await fetch(endpoint).
      then(r => r.text()).
      then(data => JSON.parse(data));

}

dataJson = fetchData();

searchInput.addEventListener('input', () => {
  console.log(searchInput.value);
  let t = [];
  dataJson.then(data => {
    let g = (data.find(element => element.city.includes(searchInput.value)));

    const cityListItem = document.createElement('li');
    const hl = document.createElement('strong');
    const span = document.createElement('span');
    const population = document.createElement('span');
    const p = document.createElement('p');
    hl.textContent = searchInput.value;
    population.textContent = g.population;
    hl.classList.add('hl');
    population.classList.add('population');
    // const index = g.city.replace(searchInput.value, '*').indexOf("");
    const index = g.city.split(searchInput.value).join('');
    console.log({index}, g.city.split(searchInput.value));
    span.textContent = index;
    p.appendChild(hl);
    p.appendChild(span);
    // cityListItem.textContent = `${g.city}  =>   ${g.population}`;
    cityListItem.appendChild(p);
    cityListItem.appendChild(population);
    suggestions.insertAdjacentElement('afterbegin', cityListItem);

    // suggestions.querySelectorAll('li').forEach(li=>{
    //   console.log(li.textContent.includes(searchInput.value));
    // })

  });

  if (searchInput.value <= 1) suggestions.innerHTML = '';
});
console.log();