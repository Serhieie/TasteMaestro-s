import commons from './commons';
import axios from 'axios';
import HELPERS from './helpers.js';

document.addEventListener('DOMContentLoaded', function () {
  const paginationSection = document.querySelector('.pagination-section');
  const paginationList = paginationSection.querySelector('.pagination-list');
  const backBtn = paginationSection.querySelector('.pagination-btn.back');
  const forwardBtn = paginationSection.querySelector('.pagination-btn.forward');

  const itemsPerPage = 9; // Кількість елементів на сторінці
  let currentPage = 1;


  function fetchData(page) {
    const url = `https://food-boutique.b.goit.study/api/products?page=${page}&limit=${itemsPerPage}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => handleData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        // Додайте код для відображення повідомлення про помилку користувачу
      });
  }

  function handleData(data) {
    // Реалізуйте логіку для відображення даних на сторінці
    // data - об'єкт, який містить дані для поточної сторінки та інші інформаційні дані

    // Очистіть поточні елементи пагінації
    paginationList.innerHTML = '';

    // Додайте нові елементи списку для кожного елемента на сторінці
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item; // Припускається, що дані містять текстовий контент
      paginationList.appendChild(li);
    });

    // Оновіть інтерфейс пагінації (якщо вам потрібно)
    updatePaginationUI(data.currentPage, data.totalPages);
  }

  function updatePaginationUI(currentPage, totalPages) {
    // Реалізуйте оновлення інтерфейсу пагінації, наприклад, додайте номери сторінок до списку

    // Очистіть поточні елементи пагінації
    paginationList.innerHTML = '';

    // Додайте елементи пагінації
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.textContent = i;
      li.addEventListener('click', () => {
        currentPage = i;
        fetchData(currentPage);
      });
      paginationList.appendChild(li);
    }
  }

  // Додайте обробники подій для кнопок пагінації
  backBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      fetchData(currentPage);
    }
  });

  forwardBtn.addEventListener('click', () => {
    // Реалізуйте перевірку, чи поточна сторінка не перевищує загальну кількість сторінок
    // Якщо ні, викликайте fetchData(currentPage + 1);
  });

  // Початкове завантаження даних
  fetchData(currentPage);
});
