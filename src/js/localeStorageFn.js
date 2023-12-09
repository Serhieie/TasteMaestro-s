/**
 * очікує спільний контейнер для карток з класом "js-cart"
 * хендлить кнопки корзини картки товару з класом "item-plus" та 'item-minus'
 * да отримання data-id="" на елементі li потрібен клас '.cart-order-item'
 * клік "item-plus" додає
 * клік 'item-minus' віднімає
 *
 */
console.log('asd');
//TODO
//додати для корзини виклик зміни к-ть товарів в хідері
//привязатися до розмітки корзини для зміни тексКонтенту в спані

const KEY = 'cartItems';

//const cartConteiner = document.querySelector('.js-cart');
//cartConteiner.addEventListener('click', handlerClickPlus);

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
    el.textContent = updateCartItems[idx].quantity;
  }
  //змінити контент елемента відображення к-ті товару
  saveStorage(KEY, updateCartItems);
}

//===============================================================
/**
 * очікує спільний контейнер для карток
 * хендлить кнопку картки товару з класом ".add-to-cart"
 * да отримання data-id="" на елементі li потрібен клас '.product_item'
 * <li data-id="640c2dd963a319ea671e383b" class="product_item"></li>
 * При першому кліку(пустий стор) сторює його, та додає елемент
 * при наступному кліку:
 * -якщо елемент з таким ід відсутній додає з кількістю 1 до ЛС
 * -якщо елемент з таким ід присутній видаляє з ЛС
 * при кожному виклику змінює в хідері к-ть товарів
 */

//TODO
//підключити ф-цію яка перемалюває іконку картки товару
const itemsContainer = document.querySelector('main');
itemsContainer.addEventListener('click', checkLS);

function checkLS(e) {
  //отримання кнопки та перевірка чи клік відбувся по ній
  const button = e.target.closest('.add-to-cart');
  //збереження ід елемента в зміну (очікується клас на елемнті '.product_item')
  const itemId = e.target.closest('.product_item');

  if (!itemId || itemId.nodeName !== 'LI') {
    return;
  }

  if (button === null) {
    console.log('modal');
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

  //перевіряємо чи є щост в ЛС
  if (!localStorage.getItem(KEY)) {
    //додаємо у випадку відсутнього ключа в ЛС
    const cartItem = [
      { id, img, imgDsc, title, category, price, size, quantity: 1 },
    ];
    saveStorage(KEY, cartItem);
    console.log('ф-ція зміни картинки додати');
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
    console.log(idx);
    if (idx !== -1) {
      //видалити
      // updateCartItems[idx].quantity += 1;
      updateCartItems.splice(idx, 1);

      console.log('ф-ція зміни картинки прибрати');
      cart.style.display = 'block';
      check.style.display = 'none';
    } else {
      //додати

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
      console.log('ф-ція зміни картинки додати');
    }
    saveStorage(KEY, updateCartItems);
    changeCounter();
  }
}

//ф-ції для роботи з ЛС
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

//ф-ція зміни текстКонтенту к-ті єлементів в хідері
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
