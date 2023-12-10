import { getOrders } from "../api-servise/api-service-basic";
import AWN from 'awesome-notifications';
import 'awesome-notifications/dist/style.css';
import { showModalFirstCase, showModalSecondCase } from '../modals';

// function calculateTotalPrice() {
//   const totalPriceDiv = document.getElementById('total-price');
//   const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//   totalPriceDiv.textContent = `Total Price: ${totalPrice}`;
// }

*/!!!!*/
// const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

// // Функція для підрахунку загальної вартості
// function calculateTotalPrice(products) {
//   let totalPrice = 0;
//   products.forEach(product => {
//     totalPrice += product.price * product.quantity; // Підрахунок загальної вартості кожного продукту
//   });
//   return totalPrice;
// }

// // Отримання DOM-елементів
// const totalPriceElement = document.getElementById('totalPrice');

// // Оновлення загальної вартості на сторінці
// function updateTotalPrice() {
//   const total = calculateTotalPrice(cartProducts);
//   totalPriceElement.textContent = `$${total.toFixed(2)}`; // Виведення загальної вартості з форматуванням до двох знаків після коми
// }

*/!!!!*/
function updateTotalPrice() {

  const cartProducts = getFromLS('cart') || []; 
  let totalPrice = 0;

  cartProducts.forEach(product => {
    totalPrice += product.price * product.quantity;
  });

  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = totalPrice.toFixed(2); // Оновлюємо відображення загальної вартості
}

// Оновлення відображення при завантаженні сторінки
updateTotalPrice();

*/ !!!!*/
const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', function(event) {
  const emailInput = document.getElementById('email');
  const isValidEmail = emailInput.checkValidity();

  if (!isValidEmail) {
    alert('Будь ласка, введіть дійсну електронну адресу.');
    event.preventDefault();
}
});

console.log()

const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

const globalOptionsCheck = {
  labels: { warning: 'Warning' },
  icons: { warning: '<i class="fas fa-exclamation-triangle"></i>' },
  colors: { warning: '#FFA500' },
  maxNotifications: 1,
  durations: { global: 2000 },
};

const globalOptionsError = {
  labels: { warning: 'Warning' },
  icons: { warning: '<i class="fas fa-exclamation-triangle"></i>' },
  colors: { warning: '#FFA500' },
  maxNotifications: 1,
  durations: { global: 4000 },
};

if (!email.match(regex)) {
  inputCheckout.style.borderColor = 'red';
  new AWN().warning('Please enter a correct email', globalOptionsCheck);
  return;
}
inputCheckout.style.borderColor = '#e8e8e2';