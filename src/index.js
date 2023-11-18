import SlimSelect from 'slim-select';
import axios from "axios";
import { BASE_URL, API_KEY } from './cat-api';
import { fetchBreeds, someOtherFunction } from './cat-api';


console.log(BASE_URL);
console.log(API_KEY);

const select = document.querySelector('selexct[breed-select]'),
console.log(select);

new SlimSelect({
    select: 'option[value 1]',
  })