const BASE_URL = 'https://food-boutique.b.goit.study/api';
const loader = document.querySelector('.loader');
//pagination
const paginationContainer = document.querySelector('.container-pagination');
const forward = document.querySelector('.forward');
const back = document.querySelector('.back');
let filters = { keyword: null, category: null, page: 1, limit: 4 };
let isFetching = false;
export default {
  BASE_URL,
  loader,
  paginationContainer,
  forward,
  back,
  filters,
  isFetching,
};
