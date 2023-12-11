import axios from 'axios';
import sprite from '../../img/sprite.svg';
import { loadStorage } from '../local-storage/locale-storage-fn';

const refs = {
  discountCardList: document.querySelector('.discount-card-list'),
};

productsWithDiscountShow();
// можна додати зміну продуктів зі знижкою через заданий час:
// const intervalId = setInterval(productsWithDiscountShow, 10000);

async function productsWithDiscountShow() {
  try {
    const cards = await productsWithDiscountServise();
    const randomCards = getRandomTwoCards(cards);
    refs.discountCardList.innerHTML = productsWithDiscountMarkup(randomCards);
  } catch (error) {
    console.log(error);
  }
}

async function productsWithDiscountServise() {
  const BASE_URL = 'https://food-boutique.b.goit.study/api';
  const END_POINT = 'products/discount';

  try {
    const { data } = await axios.get(`${BASE_URL}/${END_POINT}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function getRandomTwoCards(arr) {
  const newArray = [...arr];

  const randomIndex1 = Math.floor(Math.random() * newArray.length);
  const element1 = newArray[randomIndex1];

  newArray.splice(randomIndex1, 1);

  const randomIndex2 = Math.floor(Math.random() * newArray.length);
  const element2 = newArray[randomIndex2];

  return [element1, element2];
}

function productsWithDiscountMarkup(array) {
  let updateCartItems = [];
  let idx = -1;
  if (loadStorage('cartItems')) {
    updateCartItems = loadStorage('cartItems');
    idx = updateCartItems.findIndex(element => element.id === array._id);
  }

  // console.log(loadStorage('cartItems'));
  return array
    .map(
      ({ _id, name, img, category, price, size, popularity }) => `
      <li data-id="${_id}" class="discount-card product_item js-card">
         <div class="img-field">
         <img
            id="product__image"
             class="discount-product-img"
             src="${img}"
             alt="${name}"
           />
         </div>
         <div class="discount-product-info">
           <p id="product__title" class="discount-product-name">${name}</p>
           <div class="discount-product-buy">
             <p id="product__price" class="discount-product-price">
               $<span class="js-discount-product-price">${price}</span>
             </p>
             <button data-id="${_id}" class="discount-cart-btn add-to-cart" type="button">
                <svg class="card-icon-cart discount-cart-icon" ${
                  idx === -1
                    ? "style = 'display:block'"
                    : "style = 'display:none'"
                }  width="18" height="18">
                      <use xlink:href="${sprite}#shopping-cart"></use>
                  </svg>
                  <svg class="card-icon-check discount-check-icon" ${
                    idx === -1
                      ? "style = 'display:none'"
                      : "style = 'display:block'"
                  }  width="18" height="18">
                      <use xlink:href="${sprite}#check"></use>
                  </svg>
             </button>
           </div>
         </div>
         <svg class="discount-label-icon" width="60" height="60">
           <use xlink:href="${sprite}#discount"></use>
         </svg>
         <span id="product_category_name" class="visually-hidden">${category}</span>
         <span id="product_size" class="visually-hidden">${size}</span>
         <span class="product__description__span visually-hidden">${popularity}</span>
       </li>`
    )
    .join('');
}
