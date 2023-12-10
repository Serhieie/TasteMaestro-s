import axios from 'axios';
import { createProductItemMarkup } from './markup.js';

const filterForm = document.getElementById('filterForm');
const keywordInput = document.getElementById('keywordInput');
const categorySelectButton = document.getElementById('categorySelect');
const categoryList = document.querySelector('.category-list');
const sortProductsButton = document.getElementById('sortProducts');
const sortProductsList = document.querySelector('.sortProducts-list');
const productsList = document.getElementById('productsList');

const filters = { keyword: null, category: null, page: 1, limit: 6 };
let categories = [];

const fetchProducts = async () => {
    try {
        let url = `https://food-boutique.b.goit.study/api/products?page=${filters.page}&limit=${filters.limit}`;

        if (filters.keyword) {
            url += `&keyword=${filters.keyword}`;
        }

        if (filters.category && filters.category !== 'Show all') {
            url += `&category=${filters.category}`;
        }

        if (filters.sort && filters.sort !== 'all') {
            switch (filters.sort) {
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

        console.log(url);
        const response = await axios.get(url);
        const data = response.data;
        displayProducts(data.results);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

const displayProducts = (products) => {
    productsList.innerHTML = '<ul class="product__list">' +
        products.map(product => createProductItemMarkup(product)).join('') +
        '</ul>';
};

const fetchCategories = async () => {
    try {
        const response = await axios.get('https://food-boutique.b.goit.study/api/products/categories');
        const data = response.data;
        categories = [...data, 'Show all'];
        displayCategories(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

const displayCategories = (categories) => {
    const listItems = categories.map(category => {
        let displayCategory = category.replace(/_/g, ' ');

        if (category === 'Breads_&_Bakery') {
            displayCategory = displayCategory.replace(/&/g, '/');
        }

        return `<li class="category-item" data-value="${category}">${displayCategory}</li>`;
    }).join('');

    categoryList.innerHTML = listItems;
};

const updateSortButtonText = (sortOption) => {
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
    sortProductsList.classList.toggle('show');
});

const updateCategoryButtonText = (category) => {
    categorySelectButton.textContent = category;
};

const getCategoryValue = (selectedItem) => {
    return selectedItem ? selectedItem.getAttribute('data-value') : null;
};

const hideCategoryList = () => {
    categoryList.classList.remove('show');
};

categorySelectButton.addEventListener('click', () => {
    categoryList.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (
        !event.target.matches('#sortProducts') &&
        !event.target.closest('.sortProducts-list')
    ) {
        hideSortList();
    }
});

document.addEventListener('click', (event) => {
    if (
        !event.target.matches('#categorySelect') &&
        !event.target.closest('.category-list')
    ) {
        hideCategoryList();
    }
});

keywordInput.addEventListener('input', () => {
    filters.keyword = keywordInput.value;
    filters.page = 1;
    fetchProducts();
});

filterForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    filters.keyword = keywordInput.value;
    filters.page = 1;
    // fetchProducts();
});

categoryList.addEventListener('click', (event) => {
    if (event.target.classList.contains('category-item')) {
        const selectedCategory = getCategoryValue(event.target);
        filters.category = selectedCategory;
        filters.page = 1;
        fetchProducts();
        updateCategoryButtonText(selectedCategory);
        hideCategoryList();
    }
});

sortProductsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('category-item')) {
        const selectedSortOption = event.target.getAttribute('data-value');
        filters.sort = selectedSortOption;
        filters.page = 1;
        fetchProducts();
        updateSortButtonText(selectedSortOption);
        hideSortList();
    }
});

// Викликати функції з модуля
fetchCategories();
fetchProducts();