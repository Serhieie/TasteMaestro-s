import axios from 'axios';
import { createProductItemMarkup } from '../helpers/markup.js';
import COMMONS from '../commons.js';
import {
  showLoaderProductList,
  hideLoaderProductList,
} from '../helpers/loaders.js';
import { createPaginationMarkup } from './pagination.js';

const filterForm = document.querySelector('.filters-from');
const keywordInput = document.getElementById('keywordInput');
const categorySelectButton = document.getElementById('categorySelect');
const categoryList = document.querySelector('.category-list');
const sortProductsButton = document.getElementById('sortProducts');
const sortProductsList = document.querySelector('.sortProducts-list');
const productsList = document.querySelector('.product__list');
// const categoryListForNoItems = document.querySelector('.container__products');
const svgCategory = document.querySelector('.svg__category');
const svgSort = document.querySelector('.svg__category_use');

let categories = [];

const saveFiltersToLocalStorage = () => {
  localStorage.setItem('filters', JSON.stringify(COMMONS.filters));
};

const loadFiltersFromLocalStorage = () => {
  const savedFilters = JSON.parse(localStorage.getItem('filters'));

  if (!savedFilters) {
    return;
  }

  if (savedFilters) {
    if (savedFilters.keyword) {
      keywordInput.value = savedFilters.keyword;
    }
    COMMONS.filters = savedFilters;
  }

  if (savedFilters.category === null) {
    return;
  }
  if (savedFilters.sort === null) {
    return;
  }
  let displayCategory = savedFilters.category.replace(/_/g, ' ');
  if (savedFilters.category.includes('%26')) {
    displayCategory = displayCategory.replace(/%26/g, '&');
  }
  updateSortButtonText(savedFilters.sort);
  categorySelectButton.textContent = displayCategory.replace(/_/g, ' ');
};

window.addEventListener('resize', onResize);

function onResize() {
  if (window.innerWidth >= 1440) {
    COMMONS.filters.limit = 9;
  } else if (window.innerWidth <= 1440 && window.innerWidth >= 768) {
    COMMONS.filters.limit = 8;
  } else {
    COMMONS.filters.limit = 6;
  }
}

loadFiltersFromLocalStorage();

export async function fetchProducts() {
  try {
    onResize();

    let url = `${COMMONS.BASE_URL}/products?page=${COMMONS.filters.page}&limit=${COMMONS.filters.limit}`;

    if (COMMONS.filters.keyword) {
      url += `&keyword=${COMMONS.filters.keyword}`;
    }

    if (COMMONS.filters.category && COMMONS.filters.category !== 'Show all') {
      if (COMMONS.filters.category.includes('&')) {
        COMMONS.filters.category = COMMONS.filters.category.replace(
          /&/g,
          '%26'
        );
      }
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
    showLoaderProductList();
    const response = await axios.get(url);
    const data = response.data;
    COMMONS.filters.totalPages = data.totalPages;
    createPaginationMarkup(data.totalPages, COMMONS.filters.page);
    displayProducts(data.results);
    saveFiltersToLocalStorage();
    hideLoaderProductList();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

const displayProducts = products => {
  productsList.innerHTML = products
    .map(product => createProductItemMarkup(product))
    .join('');
  if (!products.length) {
    productsList.innerHTML =
      '<div class="nothing-found-conteiner"><p class="nothing-found">Nothing was found for the selected <span class="nothing-found_filter"> filters...</span></p><p class="inf-nothing-found">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>';
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

function displayCategories(categories) {
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
}

function updateSortButtonText(sortOption) {
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
}

sortProductsButton.addEventListener('click', event => {
  event.preventDefault();
  sortProductsList.classList.toggle('show');
  svgSort.classList.toggle('rotate-sort');
});

const updateCategoryButtonText = category => {
  categorySelectButton.textContent = category;
};

const getCategoryValue = selectedItem => {
  return selectedItem ? selectedItem.getAttribute('data-value') : null;
};

const getSortValue = selectedItem => {
  return selectedItem ? selectedItem.getAttribute('data-value') : null;
};

const hideCategoryList = () => {
  categoryList.classList.remove('show');
};

const hideSortList = () => {
  sortProductsList.classList.remove('show');
};

categorySelectButton.addEventListener('click', event => {
  event.preventDefault();
  categoryList.classList.toggle('show');
  svgCategory.classList.toggle('rotate-category');
});

document.addEventListener('click', event => {
  if (
    !event.target.matches('#sortProducts') &&
    !event.target.closest('.sortProducts-list')
  ) {
    hideSortList();
    if (svgSort.classList.contains('rotate-sort')) {
      svgSort.classList.toggle('rotate-sort');
    }
  }
});

document.addEventListener('click', event => {
  if (
    !event.target.matches('#categorySelect') &&
    !event.target.closest('.category-list')
  ) {
    hideCategoryList();
    if (svgCategory.classList.contains('rotate-category')) {
      svgCategory.classList.toggle('rotate-category');
    }
  }
});

keywordInput.addEventListener('input', () => {
  COMMONS.filters.keyword = keywordInput.value;
  COMMONS.filters.page = 1;
  if (COMMONS.filters.keyword === '') {
    fetchProducts();
  }
});

filterForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (COMMONS.isFetching || !COMMONS.filters.keyword) return;
  COMMONS.filters.keyword = keywordInput.value;
  COMMONS.filters.page = 1;
  fetchProducts();
});

categoryList.addEventListener('click', event => {
  if (event.target.classList.contains('category-item')) {
    const selectedCategory = getCategoryValue(event.target);
    let displayCategory = selectedCategory.replace(/[%\d_]+/g, ' ').trim();

    COMMONS.filters.category = selectedCategory;
    COMMONS.filters.page = 1;

    updateCategoryButtonText(displayCategory);
    svgCategory.classList.toggle('rotate-category');
    fetchProducts();
    hideCategoryList();
  }
});

sortProductsList.addEventListener('click', event => {
  if (event.target.classList.contains('category-item')) {
    const selectedSortOption = getSortValue(event.target);
    COMMONS.filters.sort = selectedSortOption;
    COMMONS.filters.page = 1;
    updateSortButtonText(selectedSortOption);
    svgSort.classList.toggle('rotate-sort');
    fetchProducts();
    hideSortList();
  }
});

fetchCategories();
fetchProducts();
loadFiltersFromLocalStorage();
