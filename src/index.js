import axios from 'axios';
import SlimSelect from 'slim-select';
import {fetchBreeds} from './cat-api';
import {fetchCatByBreed} from './cat-api';
import {createMarcupCat} from './cat-api';

const refs = {
  selectBreed: document.querySelector('.breed-select'),
  selectEl: document.querySelector('.breed-select'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
  divEl: document.querySelector('.cat-info')
}

showLoader();
hideError() 

fetchBreeds() 
  .then((response) => {
    const breeds = response.data;
    const optionsMarkup = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
    refs.selectBreed.innerHTML = optionsMarkup;
  })
  .catch(error => {
      console.error('Error fetching breeds:', error);
  })
  .finally(() => {
    hideLoader(); // Ховаємо loader після завершення запиту
  });

// refs.selectEl.addEventListener('change', (evt) => {
//   const breedId = evt.target.value;
//   fetchCatByBreed(breedId) {
//     .then(({name}) => {
//       // Обробка отриманих даних про кота
//       // Відображення інформації про кота у div.cat-info
//     })
//   }
// });

// Ваша реалізація функцій з cat-api.js

// Функція для показу loader
function showLoader() {
  document.querySelector('.loader').style.display = 'block';
}

// Функція для приховання loader
function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}

// Функція для показу error
function showError() {
  document.querySelector('.error').style.display = 'block';
}

// Функція для приховання error
function hideError() {
  document.querySelector('.error').style.display = 'none';
}

// Завантаження списку порід під час завантаження сторінки
refs.selectEl.addEventListener('DOMContentLoaded', async () => {
  try {
    showLoader();
    const response = await fetchBreeds();
    const allBreeds = response.data;
    const selectBreed = document.querySelector('.breed-select');
    selectBreed.innerHTML = createMarcupBreeds(allBreeds);
    new SlimSelect({ select: '.breed-select' });
  } catch (error) {
    showError();
  } finally {
    hideLoader();
  }
});

// Обробник подій для вибору породи

refs.selectEl.addEventListener('change', onShowCat);
showLoader(); 

function onShowCat(evt) {
  const breedId = evt.target.value;
  fetchCatByBreed(breedId)
  .then(data => {
    const markupCat = createMarcupCat(data)
    refs.divEl.innerHTML = markupCat;
  })
  .catch(error => {
    console.error('Error fetching cat data:', error);
  })
  .finally(() => {
    hideLoader(); // Ховаємо loader після завершення запиту
  });
}

// const breedId = event.target.value;
  // fetchCatByBreed(breedId)

  // try {
  //   console.log('ololo');
  //   showLoader();
  //   const catInfo = await fetchCatByBreed(breedId);
  //   const catMarkup = createMarcupCat(catInfo)
  //   refs.divEl.innerHTML = catMarkup;

  //   // Відобразіть інформацію про кота в DOM - назва породи, опис і темперамент
  //   // Наприклад, ви можете викликати функцію, яка створить блок із зображенням та іншою інформацією
  // } catch (error) {
  //   showError();
  // } finally {
  //   hideLoader();
  // }
// });

// Функція відмальовує в дом інформацію про кота
export function createMarcupCat(data){
  const {name, wikipedia_url, temperament, url} = data;
  return catData = `<div class="cat">
  <img src="${url}" alt="${name}">
  <div>
    <h1 class="titleName">${name}</h1>
    <p class="description">${wikipedia_url}</p>
    <p class="temperament">${temperament}</p>
  </div>
</div>`
}