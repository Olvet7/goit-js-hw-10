import axios from 'axios';
import SlimSelect from 'slim-select';
import {fetchBreeds} from './cat-api';



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
document.addEventListener('DOMContentLoaded', async () => {
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
document.querySelector('.breed-select').addEventListener('change', async (event) => {
  const selectedBreedId = event.target.value;
  try {
    showLoader();
    const catInfo = await fetchCatByBreed(selectedBreedId);
    // Відобразіть інформацію про кота в DOM
    // Наприклад, ви можете викликати функцію, яка створить блок із зображенням та іншою інформацією
  } catch (error) {
    showError();
  } finally {
    hideLoader();
  }
});