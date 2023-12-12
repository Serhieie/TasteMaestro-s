import sprite from '/img/sprite.svg';
import { loadStorage } from '../local-storage/locale-storage-fn';

export function createProductItemMarkup({
  _id,
  name,
  img,
  desc,
  category,
  price,
  size,
  popularity,
  is10PercentOff,
}) {
  let updateCartItems = [];
  let idx = -1;
  if (loadStorage('cartItems')) {
    updateCartItems = loadStorage('cartItems');
    idx = updateCartItems.findIndex(element => element.id === _id);
  }
  return `<li data-id="${_id}" class="product__list__card product_item js-card">
        <svg class="sticker_icon ${
          is10PercentOff ? '' : 'visually-hidden'
        }" width="60" height="60" aria-label="discount">
          <use xlink:href="${sprite}#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
          id="product__image"
            class="product__image"
            src="${img}"
            alt="${name}"
            width="140px"
            height="140px"
            aria-label="product"
          />
        </div>
        <div class="product__description__wraper">
          <h3 id="product__title" class="product__title">${name}</h3>
          <ul class="product__details">
            <li class="product-description-item">
              <p class="product__description__text">
                Category:
                <span id="product_category_name" class="product__description__span"}>${category.replace(
                  /_/g,
                  ' '
                )}</span>
              </p>
            </li>
            <li class="product-description-item">
              <p class="product__description__text">
                Size: <span id="product_size" class="product__description__span">${size}</span>
              </p>
            </li>
            <li class="product-description-item">
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${popularity}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p id="product__price" class="product__price">${'$' + price}</p>
          <button type="button" data-id="${_id}" class="product__order__btn add-to-cart" aria-label="add-cart">
            <svg class="card-icon-cart" ${
              idx === -1 ? "style = 'display:block'" : "style = 'display:none'"
            }  width="18" height="18" aria-label="cart">
              <use xlink:href="${sprite}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check" ${
              idx === -1 ? "style = 'display:none'" : "style = 'display:block'"
            }  width="18" height="18" aria-label="cart">
              <use xlink:href="${sprite}#check"></use>
            </svg>
          </button>
        </div>
      </li>`;
}
