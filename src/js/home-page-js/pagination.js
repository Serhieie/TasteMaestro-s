// import { filters } from './filter.js';
import COMMONS from '../commons.js';
import { fetchProducts } from './filter.js';

let lastTotalHits = COMMONS.filters.totalHits;

COMMONS.paginationContainer.addEventListener('click', onPaginationClick);

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
      if (COMMONS.filters.page === lastTotalHits) {
        COMMONS.forward.setAttribute('disabled', true);
        return;
      } else if (COMMONS.filters.page < lastTotalHits) {
        COMMONS.forward.removeAttribute('disabled');
      }

      COMMONS.filters.page += 1;
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

function updatePagination() {
  const paginationItems = document.querySelectorAll('.pagi_item');
  // const paginationBtn = document.querySelectorAll('.pagination-btn');

  paginationItems.forEach(item => {
    item.classList.remove('isActive');
    if (parseInt(item.textContent) === COMMONS.filters.page) {
      item.classList.add('isActive');
    }
  });

  // Дізейбл кнопки назад, якщо сторінка перша
  if (COMMONS.filters.page <= 1) {
    COMMONS.back.setAttribute('disabled', true);
  } else {
    COMMONS.back.removeAttribute('disabled');
  }

  if (COMMONS.filters.page === lastTotalHits) {
    return COMMONS.forward.setAttribute('disabled', true);
  } else {
    return COMMONS.forward.removeAttribute('disabled');
  }

  // Приховати стрілки, якщо сторінок менше або рівно 1
  // if (paginationBtn.length <= 1) {
  //   COMMONS.back.style.display = 'none';
  //   COMMONS.forward.style.display = 'none';
  // } else {
  //   COMMONS.back.style.display = 'block';
  //   COMMONS.forward.style.display = 'block';
  // }

  // // Перевірити, чи є тільки один елемент
  // if (paginationBtn.length <= 1) {
  //   // Приховати всі кнопки
  //   paginationBtn.forEach(button => {
  //     button.style.display = 'none';
  //   });
  // } else {
  //   // Показати всі кнопки
  //   paginationBtn.forEach(button => {
  //     button.style.display = 'block';
  //   });
  // }
}

function createPaginationItem(pageNumber, isActive) {
  const activeClass = isActive ? 'is-active' : '';
  const paddingChange = COMMONS.filters.page >= 10 ? 'py' : '';
  return `<li class="pagi_item ${activeClass} pagination_item"><span class="pagi_item_span ${paddingChange}">${pageNumber}</span></li>`;
}

function createEllipsisItem() {
  return `<li class="pagi_item pagination_item"><span class="pagi_item_span">...</span></li>`;
}

function createPaginationMarkup(totalHits, page) {
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
export { createPaginationMarkup };
