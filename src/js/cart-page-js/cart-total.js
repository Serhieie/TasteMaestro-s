import { getOrders } from "../api-servise/api-service-basic";
import AWN from 'awesome-notifications';
import 'awesome-notifications/dist/style.css';
import { showModalFirstCase, showModalSecondCase } from '../modals';
// import {totalPrice} from "../cart-page-js/cart-order-list";

  // const totalElement = document.getElementById('cart_total');
  // totalElement.textContent = `$${totalPriceCart}`;

const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.querySelector('.cart-basket-input');
  const email = emailInput.value;
  const isValidEmail = emailInput.checkValidity();

  if (!isValidEmail) {
    alert('Будь ласка, введіть дійсну електронну адресу.');
}

if (!email.match(regex)) {
  emailInput.style.borderColor = 'red';
  new AWN().warning('Please enter a correct email', globalOptionsCheck);
}
emailInput.style.borderColor = '#e8e8e2';
checkoutForm.reset();
});

// console.log()

const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

const globalOptionsCheck = {
  labels: { warning: 'Warning' },
  icons: { warning: '<i class="fas fa-exclamation-triangle"></i>' },
  colors: { warning: '#FFA500' },
  maxNotifications: 1,
  durations: { global: 2000 },
};

