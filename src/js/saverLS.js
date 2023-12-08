/**
 * очікує спільний контейнер для карток з класом "js-cart"
 * хендлить кнопку картки товару з класом "add-to-cart"
 * з картки забирає data-id=""
 * При першому кліку(пустий стор) сторює його, при наступних виконує пошук та збільшує кількість товару
 */

const btnAddCart = document.querySelector('.js-cart');
btnAddCart.addEventListener('click', handlerClick);

function handlerClick(e) {
  if (!e.target.classList.contains('add-to-cart')) {
    return;
  }
  const itemId = e.target.parentElement.dataset.id;
  //перевіряємо чи є щост в ЛС
  if (!localStorage.getItem('cartItems')) {
    //додаємо у випадку відсутнього ключа в ЛС
    const cartItem = [{ id: `${itemId}`, quantity: 1 }];
    saveStorage('cartItems', cartItem);
  } else {
    //при наявному ЛС перевіряється вміст та зміннюється к-ть
    const updateCartItems = loadStorage('cartItems');
    const idx = updateCartItems.findIndex(element => element.id === itemId);
    if (idx != -1) {
      updateCartItems[idx].quantity += 1;
    } else {
      updateCartItems.push({ id: `${itemId}`, quantity: 1 });
    }
    saveStorage('cartItems', updateCartItems);
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

const loadStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
