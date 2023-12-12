import sprite from '/img/sprite.svg';

const orderList = document.querySelector('.cart-order-list'),
  cartListSection = document.querySelector('.cart-filled-list'),
  cartEmptySection = document.querySelector('.cart-empty'),
  clearCartBtn = document.querySelector('.cart-clear-btn'),
  cartCount = document.querySelector('.cart-count'),
  cartTotalRight = document.querySelector('.cart_total_order'),
  headerCounter = document.querySelector('.header__js_span'),
  totalElement = document.getElementById('cart_total');

//  LS manipulation
let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

function updateLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cart));
}

// Start Render section ******************
document.addEventListener('DOMContentLoaded', () => {
  renderCartItem();
  updateTotalPrice();
  changeListLength();

  orderList.addEventListener('click', handleCartClick);
  clearCartBtn.addEventListener('click', handleClearCart);
});

function changeListLength() {
  if (!cart.length) {
    headerCounter.textContent = `Cart (${0})`;
    cartCount.textContent = `Cart (${0})`;
  } else {
    cartCount.textContent = `Cart (${cart.length})`;
    headerCounter.textContent = `Cart (${cart.length})`;
  }
}

function cartOrder(cart) {
  return cart
    .map(
      item => `
  <li class="cart-order-item">
    <div class="cart-item-content">
      <div class="cart-order-img-cont">
        <img
          class="cart-order-img"
          src="${item.img}"
          alt="${item.imgDsc}"
        />
      </div>
      <div class="cart-order-desc">
        <div class="cart-order-title-btn">
          <h3 class="cart-order-title">${item.title}</h3>
          <button class="cart-remove-btn" type="button">
            <span class="cart-remove-span">
              <svg class="cart-remove-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${sprite}#close-cross"
                ></use>
              </svg>
            </span>
          </button>
        </div>
        <p class="cart-order-text">
          <span class="cart-order-span">Category:</span>${item.category}
          <span class="cart-order-span cart-gap">Size:</span>
          ${item.size}
        </p>
        <div class="cart-order-total-price">
          <span class="cart-order-price">$${(
            parseFloat(item.price.replace('$', '')) * item.quantity
          ).toFixed(2)}</span>
          <div class="cart-order-amount">
            <button class="cart-order-decr" type="button"><svg class="minus-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${sprite}#minus"
                ></use>
              </svg></button>
            <span class="cart-order-quantity">${item.quantity}</span>
            <button class="cart-order-incr" type="button"><svg class="plus-icon" width="18" height="18">
                <use
                  class="cart-remove-svg"
                  xlink:href="${sprite}#plus"
                ></use>
              </svg></button>
          </div>
        </div>
      </div>
    </div>
  </li>
  `
    )
    .join('');
}

function renderCartItem() {
  if (cart.length) {
    orderList.innerHTML = cartOrder(cart);
  } else {
    cartEmptySection.classList.remove('visually-hidden');
    cartTotalRight.classList.add('visually-hidden');
    cartListSection.classList.add('visually-hidden');
  }
}
// End Render section ********************

// Minus quantity in cart
function handleDecrCount(target) {
  const cartItem = target.closest('.cart-order-item');
  const index = Array.from(orderList.children).indexOf(cartItem);

  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    updateCartItem(cartItem, cart[index]);
  }
}

// Plus quantity in cart
function handleIncrCount(target) {
  const cartItem = target.closest('.cart-order-item');
  const index = Array.from(orderList.children).indexOf(cartItem);

  cart[index].quantity += 1;
  updateCartItem(cartItem, cart[index]);
}

// Remove cart-item
function handleRemoveItem(e) {
  const cartItem = e.target.closest('.cart-order-item');
  if (cartItem) {
    const index = Array.from(orderList.children).indexOf(cartItem);

    const removedItem = cart.splice(index, 1)[0];
    updateLocalStorage();

    cartItem.remove();
    updateTotalPrice();
    renderCartItem();
    changeListLength();
  }
}

orderList.addEventListener('click', e => {
  if (e.target.closest('.cart-remove-btn')) {
    handleRemoveItem(e);
  }
});

// Remove cart-list
function handleClearCart() {
  cart = [];
  orderList.innerHTML = '';
  updateTotalPrice();
  updateLocalStorage();
  renderCartItem();
  changeListLength();
}

// A manipulator function with a card
function handleCartClick(e) {
  const target = e.target;
  if (target.closest('.cart-order-decr')) {
    handleDecrCount(target);
  } else if (target.closest('.cart-order-incr')) {
    handleIncrCount(target);
  } else if (target.classList.contains('cart-remove-btn')) {
    handleRemoveItem(target);
  }
}

// Update price to cart if you change quantity
function updateCartItem(cartItem, item) {
  const totalPriceElement = cartItem.querySelector('.cart-order-price');
  const quantityElement = cartItem.querySelector('.cart-order-quantity');

  const numericPrice = parseFloat(item.price.replace('$', ''));

  totalPriceElement.textContent = `$${(numericPrice * item.quantity).toFixed(
    2
  )}`;
  quantityElement.textContent = item.quantity;

  updateTotalPrice();
  updateLocalStorage();
}

// Update Total Price in right section
function updateTotalPrice() {
  const total = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  totalElement.textContent = `$${Number(total.toFixed(2))}`;
}

export { cartOrder, handleClearCart }