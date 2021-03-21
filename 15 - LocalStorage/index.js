const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const textInput = document.querySelector('[name=item]');
const items = [];

const addItemsToDom = (item, index) => {
  itemsList.innerHTML +=
      `
      <li>
      <input type="checkbox" data-index="${index}" id="item${index}" ${item.done
          ? 'checked'
          : ''}>
      <label for='item${index}'>${item.text}</label>
      </li>
      `;

};

const itemsFromLocal = (JSON.parse(localStorage.getItem('PLATES')));

itemsFromLocal.forEach((item, i) => {
  if (item !== items[i]) items.push(item);
});

items.forEach(addItemsToDom);

console.log(items);

const addItem = (e) => {
  itemsList.innerHTML = '';
  e.preventDefault();
  const input = textInput.value;
  const item = {
    text: input,
    done: false,
  };

  items.push(item);
  items.forEach(addItemsToDom);
  localStorage.setItem('PLATES', JSON.stringify(items));
  textInput.value = '';

};

const toggleDone = (e) => {
  if (!e.target.matches('input')) return;
  const index = e.target.dataset.index;
  console.log(e.target.checked);
  items[index].done = (e.target.checked);
  localStorage.setItem('PLATES', JSON.stringify(items));
};

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
