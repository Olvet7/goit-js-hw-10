import axios from "axios";

// let selectBreed = document.querySelector('.breed-select');
// let allBreeds = [];

// Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
export function fetchBreeds(){
    // https://api.thecatapi.com/v1/breeds?api_key=live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT:
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT';
    const ENDPOINT = '/breeds'
    axios.defaults.headers.common['x-api-key'] = API_KEY;
    return axios.get((`${BASE_URL}/breeds?api_key=${API_KEY}`));
};

export function createMarcupBreeds(allBreeds) {
  return allBreeds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
}

// fetchBreeds() 
//   .then((response) => {
//     const breeds = response.data;
//     const optionsMarkup = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
//     selectBreed.innerHTML = optionsMarkup;
//   })
//   .catch(error => {
//       console.error('Error fetching breeds:', error);
//   });


// Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту. Винеси її у файл cat-api.js і зроби іменований експорт.
export function fetchCatByBreed(breedId){
  // https://api.thecatapi.com/v1/images/search?breed_ids=breedId
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const API_KEY = 'live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT';
  const ENDPOINTCAT = '/images/search' 
  
  axios.defaults.headers.common['x-api-key'] = API_KEY;
  return axios.get(`${BASE_URL}${ENDPOINTCAT}?breed_ids=${breedId}`)
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
};

// Функція відмальовує в дом інформацію про кота
export function createMarcupCat(data){
  const { url } = data[0];
  const { name, description, temperament } = data[0].breeds[0];

  return `<div class="cat">
  <img src="${url}" alt="${name}" height="300">
  <div class="cat-info">
    <h1 class="titleName">${name}</h1>
    <p class="description">${description}</p>
    <p><span class="temperament">Temperament:</span> ${temperament}</p>
  </div>
</div>`
}
