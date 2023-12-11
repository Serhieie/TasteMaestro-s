// import { filters } from './filter.js';
import COMMONS from '../commons.js';
import { fetchProducts } from './filter.js';

COMMONS.paginationContainer.addEventListener('click', onPaginationClick);

//запускаємо запит по кліку та робимо +/- сторінки
async function onPaginationClick(event) {
  const selectedPage = parseInt(event.target.textContent);

  if (event.target.closest('.pagination-btn')) {
    if (event.target.classList.contains('back')) {
      if (COMMONS.filters.page === 1) {
        return;
      } else if (COMMONS.filters.page > 0) {
        COMMONS.filters.page -= 1;
      }
    } else if (event.target.classList.contains('forward')) {
      if (COMMONS.filters.page >= COMMONS.filters.totalPages) {
        return;
      } else if (COMMONS.filters.page < COMMONS.filters.totalPages) {
        COMMONS.filters.page += 1;
      }
    }
    fetchProducts(COMMONS.filters.page);
  }

  if (event.target.classList.contains('pagi_item_span')) {
    if (event.target.textContent === '...') return;
    if (selectedPage === COMMONS.filters.page) {
      return;
    }

    COMMONS.filters.page = selectedPage;
    fetchProducts(COMMONS.filters.page);
    updatePagination();
  }
}

//відтворюємо активний елемент та передаємо значення сторінки
function updatePagination() {
  const paginationItems = document.querySelectorAll('.pagi_item');
  paginationItems.forEach(item => {
    item.classList.remove('isActive');
    if (parseInt(item.textContent) === COMMONS.filters.page) {
      item.classList.add('isActive');
    }
  });
}

//створюємо елементи
function createPaginationItem(pageNumber, isActive) {
  const activeClass = isActive ? 'is-active' : '';
  const paddingChange = COMMONS.filters.page >= 10 ? 'py' : '';
  return `<li class="pagi_item ${activeClass} pagination_item"><span class="pagi_item_span ${paddingChange}">${pageNumber}</span></li>`;
}
function createEllipsisItem() {
  return `<li class="pagi_item pagination_item ellipsis"><span class="pagi_item_span pagi_item_span_ellipsis">...</span></li>`;
}

//створюємо вміст елементів і їх стан
function createPaginationMarkup(totalHits, page) {
  hidePagination(totalHits);

  if (COMMONS.filters.page <= 1) {
    COMMONS.back.setAttribute('disabled', true);
  } else {
    COMMONS.back.removeAttribute('disabled');
  }

  if (COMMONS.filters.page >= COMMONS.filters.totalPages) {
    COMMONS.forward.setAttribute('disabled', true);
  } else {
    COMMONS.forward.removeAttribute('disabled');
  }

  const lastPage = Math.ceil(totalHits);
  let displayedPages;

  if (window.innerWidth < 768) {
    displayedPages = 1;
  } else {
    displayedPages = 2;
  }

  const paginationList = document.querySelector('.pagination-list');
  paginationList.innerHTML = '';

  if (lastPage > 1) {
    let paginationHTML = '';

    let startPage = 1;
    let endPage = lastPage;

    if (lastPage > 5) {
      startPage = Math.max(1, page - displayedPages);
      endPage = Math.min(lastPage, page + displayedPages);

      if (startPage === 1) {
        if (window.innerWidth < 768) {
          endPage = 3;
        } else {
          endPage = 5;
        }
      } else if (endPage === lastPage) {
        startPage = lastPage - 4;
      }
    }

    if (startPage >= 2) {
      paginationHTML += createPaginationItem(1, page === 1);
      paginationHTML += createEllipsisItem();
    }

    for (let i = startPage; i <= endPage; i += 1) {
      paginationHTML += createPaginationItem(i, i === page);
    }

    if (endPage < lastPage) {
      paginationHTML += createEllipsisItem();
      paginationHTML += createPaginationItem(lastPage, lastPage === page);
    }

    paginationList.innerHTML = paginationHTML;
  }
}

//приховуємо пагінацію
function hidePagination(totalHits) {
  if (totalHits <= 1) {
    COMMONS.paginationContainer.classList.add('visually-hidden');
  } else {
    COMMONS.paginationContainer.classList.remove('visually-hidden');
  }
}

export { createPaginationMarkup };
