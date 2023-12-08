import axios from 'axios';
import { createProductItemMarkup } from './markup.js';

document.addEventListener('DOMContentLoaded', () => {
  const filterForm = document.getElementById('filterForm');
  const keywordInput = document.getElementById('keywordInput');
  const categorySelect = document.getElementById('categorySelect');
  const productsList = document.getElementById('productsList');

  const filters = { keyword: null, category: null, page: 1, limit: 6 };
  let categories = [];

  categorySelect.innerHTML =
    '<option value="category-text" disabled selected>Categories</option>';

  filterForm.addEventListener('submit', async event => {
    event.preventDefault();
    filters.keyword = keywordInput.value;
    filters.category =
      categorySelect.value === '' ? null : categorySelect.value;
    filters.page = 1;
    await fetchProducts();
  });

  keywordInput.addEventListener('input', () => {
    filters.keyword = keywordInput.value;
    filters.page = 1;
    fetchProducts();
  });

  categorySelect.addEventListener('change', () => {
    filters.category =
      categorySelect.value === '' ? null : categorySelect.value;
    filters.page = 1;
    fetchProducts();
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

  const displayProducts = products => {
    productsList.innerHTML =
      '<ul class="product__list">' +
      products.map(product => createProductItemMarkup(product)).join('') +
      '</ul>';
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://food-boutique.b.goit.study/api/products/categories'
      );
      const data = response.data;
      categories = ['Show all', ...data];
      displayCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const displayCategories = categories => {
    categorySelect.innerHTML = categories
      .map(
        category =>
          `<option value="${category}">${category.replace(/_/g, ' ')}</option>`
      )
      .join('');
  };

  fetchCategories();
  fetchProducts();
});
