
const orderList = document.querySelector('.cart-order-list');

const cart = [
  {
  img: '/img/shopingPic-x1.png',
  alt: 'basket test',
  name: 'Basket',
  category: 'Fresh Basket',
  size: 'Each',
  price: 1.99,
  count: 1,
},
  {
  img: '/img/shopingPic-x1.png',
  alt: 'basket test',
  name: 'Basket',
  category: 'Fresh Basket',
  size: 'Each',
  price: 1.99,
  count: 2,
},
  {
  img: '/img/shopingPic-x1.png',
  alt: 'basket test',
  name: 'Basket',
  category: 'Fresh Basket',
  size: 'Each',
  price: 1.99,
  count: 3,
},
  {
  img: '/img/shopingPic-x1.png',
  alt: 'basket test',
  name: 'Basket',
  category: 'Fresh Basket',
  size: 'Each',
  price: 1.99,
  count: 4,
},
  {
  img: '/img/shopingPic-x1.png',
  alt: 'basket test',
  name: 'Basket',
  category: 'Fresh Basket',
  size: 'Each',
  price: 1.99,
  count: 5,
},
  {
  img: '/img/shopingPic-x1.png',
  alt: 'basket test',
  name: 'Basket',
  category: 'Fresh Basket',
  size: 'Each',
  price: 1.99,
  count: 12,
},
]

const cartOrder = (cart) => {
  checkLength();
  return cart.map(item => `
  <li class="cart-order-item">

  <div class="cart-item-content">
    <div class="cart-order-img-cont">
      <img
      class="cart-order-img"
      src="${item.img}"
      alt="${item.alt}"
      />
    </div>

    <div class="cart-order-desc">
      <div class="cart-order-title-btn">
        <h3 class="cart-order-title">Basket</h3>
        <button class="cart-remove-btn" type="button">
          <span class="cart-remove-span">
            <svg class="cart-remove-icon" width="18" height="18">
              <use
                class="cart-remove-svg"
                xlink:href="./img/sprite.svg#close-cross"
              ></use>
            </svg>
          </span>
        </button>
      </div>

      <p class="cart-order-text">
        <span class="cart-order-span">Category:</span>${item.category}
        <span class="cart-order-span">Size:</span>
        ${item.size}
      </p>

      <div class="cart-order-total-price">
        <span class="cart-order-price">$${item.price * item.count}</span>

        <div class="cart-order-amount">
          <button class="cart-order-decr" type="button">-</button>
          <span class="cart-order-quantity">${item.count}</span>
          <button class="cart-order-incr" type="button">+</button>
        </div>
      </div>
    </div>
  </div>
</li>
  `).join('');
}

function checkLength() {
  const minWidth768 = window.matchMedia('(min-width: 768px)').matches;
  const minWidth1440 = window.matchMedia('(min-width: 1440px)').matches;

  let paddingTopValue = '0';

  if (cart.length > 3) {
    if (minWidth1440) {
      paddingTopValue = '415px';
    } else if (minWidth768) {
      paddingTopValue = '550px';
    } else {
      paddingTopValue = '500px';
    }
  }

  orderList.style.paddingTop = paddingTopValue;
}

window.addEventListener('resize', checkLength);
window.addEventListener('DOMContentLoaded', checkLength);

let resizeTimeout;

window.addEventListener('resize', function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(checkLength, 250);
});

orderList.innerHTML = cartOrder(cart);