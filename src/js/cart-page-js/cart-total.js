import { getOrders, createOrder } from '../api-servise/api-service-basic';
import AWN from 'awesome-notifications';
import 'awesome-notifications/dist/style.css';
import { showCheckoutModal } from '../modals';
import { showModalFirstCase, showModalSecondCase } from '../modals';
import { cartOrder, handleClearCart } from '../cart-page-js/cart-order-list';
import { hideLoader, showLoader } from '../helpers/loaders';

const checkoutForm = document.getElementById('checkoutForm');
const loader = document.querySelector('.loader');
// let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

const imgModal = document.querySelector('.modal-cart-img');

checkoutForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = document.querySelector('.cart-basket-input');
  const email = event.currentTarget.cartsubmit.value.trim().toLowerCase();
  const isValidEmail = emailInput.checkValidity();

  if (!isValidEmail) {
    alert('Будь ласка, введіть дійсну електронну адресу.');
    return;
  }

  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  if (!email.match(regex)) {
    emailInput.style.borderColor = 'red';
    new AWN().warning('Please enter a correct email', globalOptionsCheck);
    return;
  }

  const globalOptionsCheck = {
    labels: { warning: 'Warning' },
    icons: { warning: '<i class="fas fa-exclamation-triangle"></i>' },
    colors: { warning: '#FFA500' },
    maxNotifications: 1,
    durations: { global: 2000 },
  };

  emailInput.style.borderColor = '#e8e8e2';
  showLoader();
  const data = localStorage.getItem('cartItems');
  const imgForModal = JSON.parse(data);
  imgModal.setAttribute('src', imgForModal[0].img);
  const cart = JSON.parse(data).map(({ id, quantity, img }) => {
    return { productId: id, amount: quantity };
  });

  const order = {
    email: email,
    products: cart,
  };

  createOrder(order)
    .then(data => {
      if (data.status === 201) {
        hideLoader();
        handleClearCart();
        showCheckoutModal();
        checkoutForm.reset();
      }
    })
    .catch(e => {
      console.log(e);
      new AWN().warning('Something went wrong', globalOptionsCheck);
    });
});
