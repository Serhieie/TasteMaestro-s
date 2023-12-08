import axios from 'axios';

const refs = {
  discountCardList: document.querySelector('.discount-card-list'),
};

productsWithDiscountShow();

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

function productsWithDiscountMarkup(array) {
  return array
    .map(
      ({ name, img, price }) => `
  <li class="discount-card">
        <div class="img-field">
          <img
            class="discount-product-img"
            src="${img}"
            alt=""
          />
        </div>
        <div class="discount-product-info">
          <p class="discount-product-name">${name}</p>
          <div class="discount-product-buy">
            <p class="discount-product-price">
              $<span class="js-discount-product-price">${price}</span>
            </p>
            <button class="discount-cart-btn" type="button">
              <svg class="discount-cart-icon" width="18" height="18">
                <use href="./img/sprite.svg#shopping-cart"></use>
              </svg>
            </button>
          </div>
        </div>
        <svg class="discount-label-icon" width="60" height="60">
          <use href="./img/sprite.svg#discount"></use>
        </svg>
      </li>`
    )
    .join('');
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
