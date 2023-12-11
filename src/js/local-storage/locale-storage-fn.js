// import { toastDeleted } from '../helpers/toasts';
const KEY = 'cartItems';

const itemsContainer = document.querySelector('main');
itemsContainer.addEventListener('click', checkLS);

function checkLS(e) {
  //отримання кнопки та перевірка чи клік відбувся по ній
  const button = e.target.closest('.add-to-cart');
  //збереження ід елемента в зміну (очікується клас на елемнті '.product_item')
  const itemId = e.target.closest('.product_item');

  // if (!itemId || itemId.nodeName !== 'LI') {
  //   console.log(1)
  //   return;
  // }

  if (button === null) {
    return;
  }

  const id = itemId.dataset.id;
  const img = itemId.querySelector('#product__image').src;
  const imgDsc = itemId.querySelector('#product__image').alt;
  const title = itemId.querySelector('#product__title').textContent;
  const category = itemId.querySelector('#product_category_name').textContent;
  const size = itemId.querySelector('#product_size').textContent;
  const price = itemId.querySelector('#product__price').textContent;

  const check = itemId.querySelector('.card-icon-check');
  const cart = itemId.querySelector('.card-icon-cart');

  if (!localStorage.getItem(KEY)) {
    //додаємо у випадку відсутнього ключа в ЛС'
    const cartItem = [
      { id, img, imgDsc, title, category, price, size, quantity: 1 },
    ];
    saveStorage(KEY, cartItem);
    cart.style.display = 'none';
    check.style.display = 'block';
    changeCounter();
    //потрібно змінити стан кнопки
  } else {
    //при наявному ЛС перевіряється вміст та зміннюється к-ть
    const updateCartItems = loadStorage(KEY);
    const idx = updateCartItems.findIndex(
      element => element.id === itemId.dataset.id
    );
    if (idx !== -1) {
      //видалити
      // updateCartItems[idx].quantity += 1;
      updateCartItems.splice(idx, 1);
      cart.style.display = 'block';
      check.style.display = 'none';
    } else {
      updateCartItems.push({
        id,
        img,
        imgDsc,
        title,
        category,
        price,
        size,
        quantity: 1,
      });
      cart.style.display = 'none';
      check.style.display = 'block';
      // console.log('ф-ція зміни картинки додати');
    }
    saveStorage(KEY, updateCartItems);
    changeCounter();
  }
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

window.addEventListener('load', changeCounter);
