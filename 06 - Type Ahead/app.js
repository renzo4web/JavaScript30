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

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const displayResults = (data) => {

  const element = data.map(place => {

    const regex = new RegExp(searchInput.value, 'gi');
    const cityName = place.city.replace(regex,
        `<span class="hl">${searchInput.value}</span>`);
    const stateName = place.state.replace(regex,
        `<span class="hl">${searchInput.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;

  });
  suggestions.innerHTML = element;

};

searchInput.addEventListener('change', () => {
  dataJson.then(dataRes => {
    let data = dataRes.filter(places => {
      const regex = new RegExp(searchInput.value, 'gi');
      return places.city.match(regex) || places.state.match(regex);
    });
    displayResults(data);
  });

  if (searchInput.value === '') suggestions.innerHTML = '';
});