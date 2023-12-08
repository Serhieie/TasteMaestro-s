async function fetchContactsById(id) {
  return await axios.get(`${BASE_URL}/contacts/${id}`);
}
async function createContact(data) {
  return await axios.post(`${BASE_URL}/contacts`, data);
}
import axios from 'axios';
// async function fetchContactsById(id) {
//   return await axios.get(`${BASE_URL}/contacts/${id}`);
// }
// async function createContact(data) {
//   return await axios.post(`${BASE_URL}/contacts`, data);
// }
async function createSubscription(data) {
  return await axios.post(
    `https://food-boutique.b.goit.study/api/subscription`,
    data
  );
}

export { createSubscription };

async function getOrders() {
  try {
    const response = await axios.get('https://food-boutique.b.goit.study/api/orders');
    return response.data; // Повертаємо дані з відповіді API
  } catch (error) {
    console.error('Помилка отримання замовлень:', error);
    throw error;
  }
}

export {getOrders}