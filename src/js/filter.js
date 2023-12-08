import axios from 'axios';
import { createProductItemMarkup } from './markup.js';

document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filterForm');
    const keywordInput = document.getElementById('keywordInput');
    const categorySelectButton = document.getElementById('categorySelect');
    const categoryList = document.querySelector('.category-list');
    const productsList = document.getElementById('productsList');

    const filters = { keyword: null, category: null, page: 1, limit: 6 };
    let categories = [];

    filterForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        filters.keyword = keywordInput.value;
        filters.category = getCategoryValue();
        filters.page = 1;
    });

    keywordInput.addEventListener('input', () => {
        filters.keyword = keywordInput.value;
        filters.page = 1;
        fetchProducts();
    });

    categoryList.addEventListener('click', (event) => {
        if (event.target.classList.contains('category-item')) {
            const selectedCategory = getCategoryValue(event.target);
            filters.category = selectedCategory;
            filters.page = 1;
            console.log('Зміна категорії. Нова категорія:', selectedCategory);
            fetchProducts();
            updateCategoryButtonText(selectedCategory);
            hideCategoryList();
        }
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

    const fetchProducts = async () => {
        try {
            let url = `https://food-boutique.b.goit.study/api/products?page=${filters.page}&limit=${filters.limit}`;
    
            if (filters.keyword) {
                url += `&keyword=${filters.keyword}`;
            }
    
            if (filters.category && filters.category !== 'Show all') {
                url += `&category=${filters.category}`;
            }
    
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

    fetchCategories();
    fetchProducts();
});
