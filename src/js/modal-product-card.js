import axios from 'axios';
import sprite from '/img/sprite.svg';
import { loadStorage } from './local-storage/locale-storage-fn';

const modalCard = document.querySelector('.js-modal-product-card');
const backdrop = document.querySelector('.js-backdrop');
const loader = document.querySelector('.loader-container');
const fatherDiv = document.querySelector('.father_div');
const body = document.querySelector('body');

fatherDiv.addEventListener('click', onClickProductCard);

async function onClickProductCard(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const element = event.target.closest('.js-card');
  if (element === null) {
    return;
  }
  const elementId = element.dataset.id;
  if (event.target.closest('.add-to-cart')) {
    return;
  }
  loader.classList.remove('visually-hidden');
  body.classList.add('modal-is-open');
  const cardInfo = await getProductCardInfo(elementId);

  modalCard.innerHTML = '';
  const { _id, category, desc, img, name, popularity, price, size } = cardInfo;
  const modalCardMarkup = createMarkupProductCard(
    _id,
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
    body.classList.remove('modal-is-open');
    modalCard.innerHTML = '';
    closeBtn.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onEscape);
  }

  function backdropOnClick(event) {
    if (event.target.closest('.product_item')) {
      return;
    }

    backdrop.classList.add('visually-hidden');
    modalCard.classList.add('visually-hidden');
    body.classList.remove('modal-is-open');
    modalCard.innerHTML = '';
    backdrop.removeEventListener('click', backdropOnClick);
    document.removeEventListener('keydown', onEscape);
  }

  function onEscape(evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      backdrop.classList.add('visually-hidden');
      modalCard.classList.add('visually-hidden');
      body.classList.remove('modal-is-open');
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
  _id,
  category,
  desc,
  img,
  name,
  popularity,
  price,
  size
) {
  let updateCartItems = [];
  let idx = -1;
  if (loadStorage('cartItems')) {
    updateCartItems = loadStorage('cartItems');
    idx = updateCartItems.findIndex(element => element.id === _id);
  }
  const placeholderImg = './img/image-placeholder.png';
  return `<div data-id="${_id}" class="product_item modal-product-div">
  <div class="product-container">
    <div class="product-image-box">
        <img id="product__image" class="product-image" src="${
          img !== null ? img : placeholderImg
        }" alt="${name}">
    </div>
    <div class="product-descr">
        <h4 id="product__title" class="product-title">${name}</h4>
        <ul class="product-details-list">
            <li id="product_category_name" class="product-details-text product-details-item "><span class="span-details-text">Category: </span>${category}</li>
            <li id="product_size" class="product-details-text product-details-item"><span class="span-details-text">Size: </span>${size}</li>
            <li class="product-details-text"><span class="span-details-text product-details-item">Popularity: </span>${popularity}</li>
        </ul>
        <p class="product-text">${desc}</p>
    </div>
    </div>
    <div class="product-wraper">
    <span id="product__price" class="product-price">$${price}</span>
    <button class="product-btn-shopping-cart add-to-cart" type="button" data-id="${_id}">
        <span ${
          idx === -1 ? "style = 'display:block'" : "style = 'display:none'"
        } class="card-icon-cart">Add to</span>
        <span ${
          idx === -1 ? "style = 'display:none'" : "style = 'display:block'"
        } class="card-icon-check">Remove from</span>
        <svg class="product-cart-icon" width="18" height="18">
            <use xlink:href="${sprite}#shopping-cart"></use>
        </svg>
    </button>
    </div>
    <button class="modal-btn-close js-btn-close-card" type="button">
    <svg class="icon-close">
        <use xlink:href="${sprite}#close-cross"></use>
      </svg>
    </button>
    </div>`;
}
