import axios from 'axios';

const productListContainer = document.querySelector('#productsList');
const modalCard = document.querySelector('.js-modal-product-card');
const backdrop = document.querySelector('.js-backdrop');
const loader = document.querySelector('.loader-container');

productListContainer.addEventListener('click', onClickProductCard);

async function onClickProductCard(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const element = event.target.closest('.product__list__card');
  if (element === null) {
    return;
  }
  const elementId = element.dataset.id;
  if (event.target.closest('.add-to-cart')) {
    return;
  }
  loader.classList.remove('visually-hidden');
  const cardInfo = await getProductCardInfo(elementId);

  modalCard.innerHTML = '';
  const { category, desc, img, name, popularity, price, size } = cardInfo;
  const modalCardMarkup = createMarkupProductCard(
    category,
    desc,
    img,
    name,
    popularity,
    price,
    size
  );
  modalCard.innerHTML = modalCardMarkup;

  loader.classList.add('visually-hidden');
  modalCard.classList.remove('visually-hidden');

  const closeBtn = document.querySelector('.js-btn-close-card');
  closeBtn.addEventListener('click', onClick);
  backdrop.addEventListener('click', backdropOnClick);
  document.addEventListener('keydown', onEscape);

  function onClick() {
    backdrop.classList.add('visually-hidden');
    modalCard.classList.add('visually-hidden');
    modalCard.innerHTML = '';
    closeBtn.removeEventListener('click', onClick);
  }

  function backdropOnClick() {
    backdrop.classList.add('visually-hidden');
    modalCard.classList.add('visually-hidden');
    modalCard.innerHTML = '';
    backdrop.removeEventListener('click', backdropOnClick);
  }

  function onEscape(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      backdrop.classList.add('visually-hidden');
      modalCard.classList.add('visually-hidden');
      modalCard.innerHTML = '';
      document.removeEventListener('keydown', onEscape);
    }
  }
}

async function getProductCardInfo(id) {
  try {
    modalCard.classList.remove('visually-hidden');
    backdrop.classList.remove('visually-hidden');

    const BASE_URL = 'https://food-boutique.b.goit.study/api';
    const ENDPOINT = 'products';
    const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

function createMarkupProductCard(
  category,
  desc,
  img,
  name,
  popularity,
  price,
  size
) {
  const placeholderImg = './img/image-placeholder.png';
  return `<div class="product-container">
    <div class="product-image-box">
        <img class="product-image" src="${
          img !== null ? img : placeholderImg
        }" alt="${name}">
    </div>
    <div class="product-descr">
        <h4 class="product-title">${name}</h4>
        <ul class="product-details-list">
            <li class="product-details-text"><span class="span-details-text">Category: </span>${category}</li>
            <li class="product-details-text"><span class="span-details-text">Size: </span>${size}</li>
            <li class="product-details-text"><span class="span-details-text">Popularity: </span>${popularity}</li>
        </ul>
        <p class="product-text">${desc}</p>
    </div>
    </div>
    <div class="product-wraper">
    <span class="product-price">$${price}</span>
    <button class="product-btn-shopping-cart" type="submit">
        <span>Add to</span>
        <svg class="product-cart-icon" width="18" height="18">
            <use href="./img/sprite.svg#shopping-cart"></use>
        </svg>
    </button>
    </div>
    <button class="modal-btn-close js-btn-close-card" type="button">
    <svg class="icon-close">
        <use href="./img/sprite.svg#close-cross"></use>
      </svg>
    </button>`;
}
