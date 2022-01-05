import debounce from 'lodash.debounce';
import './css/styles.css';
// all modules ===добавили библиотеку нотифликс
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notiflix.Notify.info('Cogito ergo sum');
const DEBOUNCE_DELAY = 3000;
const refs = {
  inputEl: document.querySelector('#search-box'),
};

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
function onInput(e) {
  const name = e.target.value;
  console.log(name);
  fetchCountries(name);
  // .then(name => renderNameList(name))
  // .catch(error => console.log(error));
}

function fetchCountries(name) {
  const params = 'name,capital,population,flags,languages';
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${params}`)
    .then(response => {
      console.log(response.json());
      return response.json();
    })
    .then(name => {
      console.log(name);
    })
    .catch(error => console.error);
}
