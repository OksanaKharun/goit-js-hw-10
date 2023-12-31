import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const elements = {
  selectEl: document.querySelector('.breed-select'),
  textMarkEl: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
};

const { selectEl, textMarkEl, loaderEl, errorEl } = elements;


elements.textMarkEl.classList.add('is-hidden');
elements.loaderEl.classList.replace('loader', 'is-hidden');
elements.errorEl.classList.replace('loader', 'is-hidden');


selectEl.addEventListener('change', createMarkUp);

updateSelect();

function updateSelect(data) {
  fetchBreeds(data)
    .then(data => {
      loaderEl.classList.replace('loader', 'is-hidden');
      
      let markSelect = data.map(({ name, id }) => {
        return `<option value ='${id}'>${name}</option>`;
      });
      selectEl.insertAdjacentHTML('beforeend', markSelect);
      new SlimSelect({
        select: selectEl,
      });
    })
    .catch(onFetchError);
}

function createMarkUp(event) {
  loaderEl.classList.replace('is-hidden', 'loader');
  textMarkEl.classList.add('is-hidden');

  const breedId = event.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => {
      loaderEl.classList.replace('loader', 'is-hidden');
      selectEl.classList.remove('is-hidden');
      const { url, breeds } = data[0];

      textMarkEl.innerHTML = `<img src="${url}" alt="${breeds[0].name}" width="400"/><div class="box"><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p><strong>Temperament:</strong> ${breeds[0].temperament}</p></div>`;
      textMarkEl.classList.remove('is-hidden');
    })
    .catch(onFetchError);
}


function onFetchError() {
    selectEl.classList.remove('is-hidden');
    loaderEl.classList.replace('loader', 'is-hidden');
  
    const selectedValue = selectEl.value;
    fetchCatByBreed(selectedValue)
      .then((data) => renderCatInfo(data))
    
      .catch(() => {
        Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
    });
  
}