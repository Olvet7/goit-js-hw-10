import axios from "axios";


let selectBreed = document.querySelector('.breed-select');
let allBreeds = [];

// Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
export function fetchBreeds(){
    // https://api.thecatapi.com/v1/breeds?api_key=live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT:
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT';
    axios.defaults.headers.common['x-api-key'] = API_KEY;
    return axios.get((`${BASE_URL}/breeds`));
};
// Моє
// fetchBreeds() 
//   .then((response) => {
//       const allBreeds = response.data;
//       console.log(allBreeds);
//   })
//   .catch(error => {
//       close.error('Error fetching breeds:', error);
//   })

// export function createMarcupBreeds(allBreeds) {
//   return allBreeds.map(({name}) => {
//     `<option value='${name}'>'${name}'</option>`
//   }).join('');
// }

export function createMarcupBreeds(allBreeds) {
  return allBreeds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
}

fetchBreeds() 
  .then((response) => {
    const breeds = response.data;
    const optionsMarkup = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
    selectBreed.innerHTML = optionsMarkup;
  })
  .catch(error => {
      console.error('Error fetching breeds:', error);
  });


// Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту. Винеси її у файл cat-api.js і зроби іменований експорт.
function fetchCatByBreed(breedId){
  
};

// Звідси скопіювати і спробувати внести в код 
// https://codepen.io/adenforshaw/pen/xxYJKVQ