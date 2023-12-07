import axios from 'axios';

let limit = 5;
const popularList = document.querySelector('.popular-js');
getPopular();

async function getPopular() {
  try {
    const response = await axios.get(
      `https://food-boutique.b.goit.study/api/products/popular?limit=${limit}`
    );
    popularList.insertAdjacentHTML('beforeend', createMarkup(response));
  } catch (error) {
    //при помилці сетати деф значення
    console.log('Упс! Щось пішло не так.');
  }
}

function createMarkup(response) {
  return response.data
    .map(({ img, name, category, size, popularity, _id }) => {
      const newCategory = category.replace('_', ' ');
      return `<li class="popular_list_card" data-id="${_id}">
        <svg class="sticker_icon visually-hidden" width="60" height="60">
          <use xlink:href="/img/sprite.svg#discount"></use>
        </svg>
        <div class="popular_image_container">
          <img
            class="popular_image"
            src="${img}"
            alt="${name}"
            width="56"
            height="56"
          />
        </div>
        <div class="popular_description_container">
          <h4 class="popular_product_title">${name}</h4>
          <ul class="popular_details">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Category: <span class="popular_details_text">${newCategory}</span>
              </p>
            </li>
            <div class="popular_detail_wrap">
            <li class="popular_details_item">
              <p class="popular_details_category">
                Size: <span class="popular_details_text">${size}</span>
              </p>
            </li>
            <li class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${popularity}</span>
              </p>
            </li>
            </div>
          </ul>
        </div>
        <div class="popular_order_container">
          <button class="popular_order_btn">
            <svg class="card-icon" width="12" height="12">
              <use href="/img/sprite.svg#shopping-cart"></use>
            </svg>
          </button>
        </div>
      </li>`;
    })
    .join('');
}
