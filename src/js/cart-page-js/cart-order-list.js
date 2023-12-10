const orderList = document.querySelector('.cart-order-list'),
      cartListSection = document.querySelector('.cart-filled-list'),
      cartEmptySection = document.querySelector('.cart-empty'),
      clearCartBtn = document.querySelector('.cart-clear-btn'),
      cartCount = document.querySelector('.cart-count'),
      cartTotalRight = document.querySelector('.cart_total_order');

let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

let totalPriceCart = 0;

function handleCartClick(e) {
  const target = e.target;
  if (target.classList.contains('cart-order-decr')) {
    handleDecrCount(target);
  } else if (target.classList.contains('cart-order-incr')) {
    handleIncrCount(target);
  } else if (target.classList.contains('cart-remove-btn')) {
    handleRemoveItem(target);
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
                  xlink:href="./img/sprite.svg#close-cross"
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
          <span class="cart-order-price">$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
          <div class="cart-order-amount">
            <button class="cart-order-decr" type="button">-</button>
            <span class="cart-order-quantity">${item.quantity}</span>
            <button class="cart-order-incr" type="button">+</button>
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

function handleDecrCount(target) {
  const cartItem = target.closest('.cart-order-item');
  const index = Array.from(orderList.children).indexOf(cartItem);

  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    updateCartItem(cartItem, cart[index]);
  }

}

function handleIncrCount(target) {
  const cartItem = target.closest('.cart-order-item');
  const index = Array.from(orderList.children).indexOf(cartItem);

  cart[index].quantity += 1;
  updateCartItem(cartItem, cart[index]);
}

function handleRemoveItem(e) {
  const cartItem = e.target.closest('.cart-order-item');
  if (cartItem) {
    const index = Array.from(orderList.children).indexOf(cartItem);

    const removedItem = cart.splice(index, 1)[0];
    updateLocalStorage();

    cartItem.remove();
    updateTotalPrice();
    renderCartItem();
    changeCounter();
  }
}

orderList.addEventListener('click', (e) => {
  if (e.target.closest('.cart-remove-btn')) {
    handleRemoveItem(e);
  }
});

function handleClearCart() {
  cart = [];
  orderList.innerHTML = '';
  updateTotalPrice();
  updateLocalStorage();
  renderCartItem()
  changeCounter();
}

function updateCartItem(cartItem, item) {
  const totalPriceElement = cartItem.querySelector('.cart-order-price');
  const quantityElement = cartItem.querySelector('.cart-order-quantity');

  const numericPrice = parseFloat(item.price.replace('$', ''));

  totalPriceElement.textContent = `$${(numericPrice * item.quantity).toFixed(2)}`;
  quantityElement.textContent = item.quantity;

  updateTotalPrice();
  updateLocalStorage();
}

function updateTotalPrice() {
  const total = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
  totalPriceCart = Number(total.toFixed(2));
}

function updateLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCartItem();
  updateTotalPrice();
  changeCounter();

  orderList.addEventListener('click', handleCartClick);
  clearCartBtn.addEventListener('click', handleClearCart);
});

function changeCounter() {

  if (!cart.length) {
    cartCount.textContent = `CART (${0})`;
  } else {
    cartCount.textContent = `CART (${cart.length})`;
  }
}

