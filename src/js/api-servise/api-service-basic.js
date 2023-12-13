import axios from 'axios';
import { showLoader } from '../helpers/loaders';

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
  // showLoader()
  return await axios.post(
    `https://food-boutique.b.goit.study/api/orders`,
    order
  );
}

export { createSubscription, getOrders, createOrder };
