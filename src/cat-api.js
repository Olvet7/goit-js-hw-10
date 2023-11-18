import axios from "axios";
let breed = null;


// Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
export function fetchBreeds(){
    // https://api.thecatapi.com/v1/breeds?api_key=live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT:
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = 'live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT';
    axios.defaults.headers.common['x-api-key'] = API_KEY;
    return axios.get((`${BASE_URL}/breeds`));
    let allBreeds = [];
};

fetchBreeds() 
    .then(response => {
        return response.json();
    })
    .then((response) => {
        allBreeds.push(data);
    })
    .catch(error => {
        close.error('Error fetching breeds:', error);
    })



    fetch(BASE_URL,{headers: {
        'x-api-key': API_KEY
      }})
   .then((response) => {
     return response.json();
   })
  .then((data) => {
     
     //filter to only include those with an `image` object
     data = data.filter(img=> img.image?.BASE_URL!=null)
     
     allBreeds = data;
     
     for (let i = 0; i < allBreeds.length; i++) {
      const breed = allBreeds[i];
      let option = document.createElement('option');
       
       //skip any breeds that don't have an image
       if(!breed.image)continue
       
      //use the current array index
      option.value = i;
      option.innerHTML = `${breed.name}`;
  document.getElementById('breed_selector').appendChild(option);
      
      }
     //show the first breed by default
     showBreedImage(0)
  })
  .catch(function(error) {
     console.log(error);
  });
  
  function showBreedImage(index)
  { 
    document.getElementById("breed_image").src= storedBreeds[index].image.url;
    
    document.getElementById("breed_json").textContent= storedBreeds[index].temperament
    
    
    document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
    document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
  } 






    
// Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту. Винеси її у файл cat-api.js і зроби іменований експорт.
function fetchCatByBreed(breedId){};

// Звідси скопіювати і спробувати внести в код 
// https://codepen.io/adenforshaw/pen/xxYJKVQ