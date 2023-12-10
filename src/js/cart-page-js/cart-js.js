const KEY = 'cartItems';

const cartConteiner = document.querySelector('.js-cart');
// cartConteiner.addEventListener('click', handlerClickPlus);

function handlerClickPlus(e) {
  const button = e.target.closest('.item-plus');
  if (!button) {
    return;
  }
  // <li class="cart-order-item" data-id="id_product"></li>
  const itemId = e.target.closest('.cart-order-item').dataset.id;
  const updateCartItems = loadStorage(KEY);
  const idx = updateCartItems.findIndex(element => element.id === itemId);
  updateCartItems[idx].quantity += 1;
  //шлях до спану
  el.textContent = updateCartItems[idx].quantity;
  //змінити контент елемента відображення к-ті товару
  saveStorage(KEY, updateCartItems);
}

function handlerClickMinus(e) {
  const button = e.target.closest('.item-minus');
  if (!button) {
    return;
  }
  // <li class="cart-order-item" data-id="id_product"></li>
  const itemId = e.target.closest('.cart-order-item').dataset.id;
  const updateCartItems = loadStorage(KEY);
  const idx = updateCartItems.findIndex(element => element.id === itemId);
  if (updateCartItems[idx].quantity === 0) {
    return;
  } else {
    updateCartItems[idx].quantity -= 1;
    //шлях до спану
    el.textContent = updateCartItems[idx].quantity;
  }
  //змінити контент елемента відображення к-ті товару
  saveStorage(KEY, updateCartItems);
}

const saveStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const loadStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

function changeCounter() {
  const counter = document.querySelector('.header__js_span');

  if (!loadStorage(KEY)) {
    counter.textContent = `CART (${0})`;
  } else {
    counter.textContent = `CART (${loadStorage(KEY).length})`;
  }
}

//зміна к-ті продуктів в хідері при завантаженні вікна
window.addEventListener('load', changeCounter);
