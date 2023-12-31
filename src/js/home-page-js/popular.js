import axios from 'axios';
import sprite from '/img/sprite.svg';
import { loadStorage } from '../local-storage/locale-storage-fn';

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
    //при помилці сетати деф значенняn
    console.log(`Упс! Щось пішло не так. 
    ${'Error: ' + error.message} `);
  }
}

function createMarkup(response) {
  return response.data
    .map(({ _id, name, img, category, price, size, popularity }) => {
      const newCategory = category.replace('_', ' ');
      let updateCartItems = [];
      let idx = -1;
      if (loadStorage('cartItems')) {
        updateCartItems = loadStorage('cartItems');
        idx = updateCartItems.findIndex(element => element.id === _id);
      }
      return `<li id="product_${_id}" data-id="${_id}" class="popular_list_card product_item js-card">
         <svg class="popular_discount_icon visually-hidden" width="60" height="60" alt="Discount" aria-hidden="true"
  role="img"  >
          <use xlink:href="${sprite}#Discount"></use>
         </svg>
         <div class="popular_image_container">
           <img id="product__image"
             class="popular_image"
             src="${img}"
             alt="Image of ${name}"
             width="56"
             height="56"
            aria-label="product_${_id}_image"
           />
         </div>
        <div class="popular_description_container">
          <h3 id="product__title" class="popular_product_title" aria-label="product_${_id}_title">${name}</h3>
          <div class="popular_details">
            <div class="popular_details_item">
              <p class="popular_details_category">
                Category:
                <span id="product_category_name" class="popular_details_text">${newCategory}</span>
              </p>
            </div>
             <div class="popular_detail_wrap">
            <div class="popular_details_item">
              <p class="popular_details_category">
                Size: <span id="product_size" class="popular_details_text">${size}</span>
              </p>
            </div>
            <div class="popular_details_item">
              <p class="popular_details_category">
                Popularity: <span class="popular_details_text">${popularity}</span>
              </p>
            </div>
            </div>
          </div>
        </div>
        <div class="popular_order_container">
          <p id="product__price" style = "display:none">${'$' + price}</p>
          <button data-id="${_id}" class=" popular_order_btn add-to-cart" aria-label="Add product to cart">
            <svg class="card-icon-cart popular-icon" ${
              idx === -1 ? "style = 'display:block'" : "style = 'display:none'"
            }  width="12" height="12" aria-hidden="true" role="img">
              <use xlink:href="${sprite}#shopping-cart"></use>
            </svg>
            <svg class="card-icon-check popular-icon-check" ${
              idx === -1 ? "style = 'display:none'" : "style = 'display:block'"
            }  width="12" height="12" aria-hidden="true" role="img">
              <use xlink:href="${sprite}#check"></use>
            </svg>
          </button>
        </div>
      </li>`;
    })
    .join('');
}
