import axios from 'axios';
import { createProductItemMarkup } from '../helpers/markup.js';
import COMMONS from '../commons.js';
import { createPaginationMarkup } from './pagination.js';
import throttle from 'lodash.throttle';

const filterForm = document.getElementById('filterForm');
const keywordInput = document.getElementById('keywordInput');
const categorySelectButton = document.getElementById('categorySelect');
const categoryList = document.querySelector('.category-list');
const sortProductsButton = document.getElementById('sortProducts');
const sortProductsList = document.querySelector('.sortProducts-list');
const productsList = document.querySelector('.product__list');
const categoryListForNoItems = document.querySelector('.container__products');

let categories = [];

const saveFiltersToLocalStorage = () => {
  localStorage.setItem('filters', JSON.stringify(COMMONS.filters));
};

const loadFiltersFromLocalStorage = () => {
  const savedFilters = localStorage.getItem('filters');

  if (savedFilters) {
    COMMONS.filters = JSON.parse(savedFilters);
  }
};

loadFiltersFromLocalStorage();
console.log(COMMONS.filters);

export const fetchProducts = async () => {
  try {
    if (window.innerWidth >= 1440) {
      COMMONS.filters.limit = 9;
    } else if (window.innerWidth <= 1440 && window.innerWidth >= 768) {
      COMMONS.filters.limit = 8;
    } else {
      COMMONS.filters.limit = 6;
    }

    let url = `https://food-boutique.b.goit.study/api/products?page=${COMMONS.filters.page}&limit=${COMMONS.filters.limit}`;

    if (COMMONS.filters.keyword) {
      url += `&keyword=${COMMONS.filters.keyword}`;
    }

    if (COMMONS.filters.category && COMMONS.filters.category !== 'Show all') {
      url += `&category=${COMMONS.filters.category}`;
    }

    if (COMMONS.filters.sort && COMMONS.filters.sort !== 'all') {
      switch (COMMONS.filters.sort) {
        case 'alphabetical':
          url += `&byABC=true`;
          break;
        case 'reverse-alphabetical':
          url += `&byABC=false`;
          break;
        case 'cheap':
          url += `&byPrice=true`;
          break;
        case 'expensive':
          url += `&byPrice=false`;
          break;
        case 'popular':
          url += `&byPopularity=false`;
          break;
        case 'not-popular':
          url += `&byPopularity=true`;
          break;
      }
    }
    const response = await axios.get(url);
    const data = response.data;
    COMMONS.filters.totalHits = data.totalPages;
    createPaginationMarkup(
      data.totalPages,
      COMMONS.filters.limit,
      COMMONS.filters.page
    );
    displayProducts(data.results);
    saveFiltersToLocalStorage();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const displayProducts = products => {
  if (products.length === 0) {
    categoryListForNoItems.innerHTML =
      '<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>';
  } else {
    productsList.innerHTML = products
      .map(product => createProductItemMarkup(product))
      .join('');
  }
};

const fetchCategories = async () => {
  try {
    const response = await axios.get(
      'https://food-boutique.b.goit.study/api/products/categories'
    );
    const data = response.data;
    categories = [...data, 'Show all'];
    displayCategories(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const displayCategories = categories => {
  const listItems = categories
    .map(category => {
      let displayCategory = category.replace(/_/g, ' ');

      if (category === 'Breads_&_Bakery') {
        displayCategory = displayCategory.replace(/&/g, '/');
      }

      return `<li class="category-item" data-value="${category}">${displayCategory}</li>`;
    })
    .join('');

  categoryList.innerHTML = listItems;
};

const updateSortButtonText = sortOption => {
  switch (sortOption) {
    case 'alphabetical':
      sortProductsButton.textContent = 'A to Z';
      break;
    case 'reverse-alphabetical':
      sortProductsButton.textContent = 'Z to A';
      break;
    case 'cheap':
      sortProductsButton.textContent = 'Cheap';
      break;
    case 'expensive':
      sortProductsButton.textContent = 'Expensive';
      break;
    case 'popular':
      sortProductsButton.textContent = 'Popular';
      break;
    case 'not-popular':
      sortProductsButton.textContent = 'Not popular';
      break;
    case 'all':
      sortProductsButton.textContent = 'Show all';
      break;
    default:
      break;
  }
};

const hideSortList = () => {
  sortProductsList.classList.remove('show');
};

sortProductsButton.addEventListener('click', () => {
  console.log(8);
  sortProductsList.classList.toggle('show');
});

const updateCategoryButtonText = category => {
  categorySelectButton.textContent = category;
};

const getCategoryValue = selectedItem => {
  return selectedItem ? selectedItem.getAttribute('data-value') : null;
};

const hideCategoryList = () => {
  categoryList.classList.remove('show');
};

categorySelectButton.addEventListener('click', () => {
  event.preventDefault();
  console.log(7);
  categoryList.classList.toggle('show');
});

document.addEventListener('click', event => {
  event.preventDefault();
  console.log(6);
  if (
    !event.target.matches('#sortProducts') &&
    !event.target.closest('.sortProducts-list')
  ) {
    hideSortList();
  }
});

document.addEventListener('click', event => {
  event.preventDefault();
  console.log(20);
  if (
    !event.target.matches('#categorySelect') &&
    !event.target.closest('.category-list')
  ) {
    hideCategoryList();
  }
});

keywordInput.addEventListener(
  'input',
  throttle(() => {
    console.log(4);
    COMMONS.filters.keyword = keywordInput.value;
    COMMONS.filters.page = 1;
    fetchProducts();
  }, 1000)
);

filterForm.addEventListener('submit', async event => {
  console.log(3);
  event.preventDefault();
  COMMONS.filters.keyword = keywordInput.value;
  COMMONS.filters.page = 1;
  fetchProducts();
});

categoryList.addEventListener('click', event => {
  console.log(1);
  if (event.target.classList.contains('category-item')) {
    const selectedCategory = getCategoryValue(event.target);
    COMMONS.filters.category = selectedCategory;
    COMMONS.filters.page = 1;
    fetchProducts();
    updateCategoryButtonText(selectedCategory);
    hideCategoryList();
    saveFiltersToLocalStorage();
    loadFiltersFromLocalStorage();
    console.log(COMMONS.filters);
  }
});

sortProductsList.addEventListener('click', event => {
  console.log(2);
  if (event.target.classList.contains('category-item')) {
    const selectedSortOption = event.target.getAttribute('data-value');
    COMMONS.filters.sort = selectedSortOption;
    COMMONS.filters.page = 1;
    fetchProducts();
    updateSortButtonText(selectedSortOption);
    hideSortList();
  }
});

fetchCategories();
fetchProducts();
