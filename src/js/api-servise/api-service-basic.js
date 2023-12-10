import axios from 'axios';

async function createSubscription(data) {
  return await axios.post(
    `https://food-boutique.b.goit.study/api/subscription`,
    data
  );
}

async function getOrders() {
  try {
    const response = await axios.get(
      'https://food-boutique.b.goit.study/api/orders'
    );
    return response.data; // Повертаємо дані з відповіді API
  } catch (error) {
    console.error('Помилка отримання замовлень:', error);
    throw error;
  }
}

async function createOrder(order) {
  return await axios.post(
    `https://food-boutique.b.goit.study/api/orders`,
    order
  );
}

// function getFromLS(cartItems) {
//   const data = localStorage.getItem(order);
//   try {
//     const info = JSON.parse(data).map(({ id, quantity }) => {
//       id, quantity;
//     });
//   } catch {
//     return data;
//   }
// }
// const email = evt.currentTarget.subscribe.value.trim().toLowerCase();
// const order = {
//   email: email,
//   products: [info],
// };

// createOrder(order)
//   .then(data => {
//     if (data.status === 201) {
//         loader.classList.add('visually-hidden');

//       }
//   })
//   .catch(e => console.error(e)); //тут тостік

// Приклад обʼєкту відправки
// {
//   "email": "test@gmail.com",
//   "products": [
//     {
//       "productId": "640c2dd963a319ea671e383b",
//       "amount": 2
//     }
//   ]
// }

export { createSubscription, getOrders, createOrder };
