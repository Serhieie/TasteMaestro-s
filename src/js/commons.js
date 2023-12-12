const BASE_URL = 'https://food-boutique.b.goit.study/api';
const loader = document.querySelector('.loader-container');
const loaderProductList = document.querySelector('.loader-product-container');
const loaderPopular = document.querySelector('.loader-popular-container');
const loaderDiscount = document.querySelector('.loader-discount-container');

//pagination
const paginationContainer = document.querySelector('.conteiner-pagination');
const forward = document.querySelector('.forward');
const back = document.querySelector('.back');
let filters = { keyword: null, category: null, page: 1, limit: 9 };
let isFetching = false;
//

export default {
  BASE_URL,
  loader,
  paginationContainer,
  forward,
  back,
  filters,
  isFetching,
  loaderProductList,
  loaderPopular,
  loaderDiscount,
};
