export function createProductItemMarkup({
  _id,
  name,
  img,
  desc,
  category,
  price,
  size,
  popularity,
}) {
  return `<li id="${_id}" class="product__list__card">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use href="./img/sprite.svg#shopping-cart#discount"></use>
        </svg>
        <div class="product__image__wraper">
          <img
            class="product__image"
            src="${img}"
            alt="${desc}"
            width="140px"
            height="140px"
          />
        </div>
        <div class="product__description__wraper">
          <h3 class="product__title">${name}</h3>
          <ul class="product__details">
            <li>
              <p class="product__description__text">
                Category:
                <span class="product__description__span">${category}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Size: <span class="product__description__span">${size}</span>
              </p>
            </li>
            <li>
              <p class="product__description__text">
                Popularity: <span class="product__description__span">${popularity}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="product__order__wraper">
          <p class="product__price">${'$' + price}</p>
          <button class="product__order__btn">
            <svg class="card-icon-product" width="18" height="18">
              <use href="./img/sprite.svg#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`;
}
