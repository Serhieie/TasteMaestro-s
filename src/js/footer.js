import { createSubscription } from './api-servise/api-service-basic';
import AWN from 'awesome-notifications';
import 'awesome-notifications/dist/style.css';
import { showModalFirstCase, showModalSecondCase } from './modals';

const form = document.querySelector('.footer-form-js');
const inputFooter = document.querySelector('#subscribe');
form.addEventListener('submit', onSubmit);
const loader = document.querySelector('.loader-container');

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

function onSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.subscribe.value.trim().toLowerCase();

  if (!email.match(regex)) {
    inputFooter.style.borderColor = 'red';
    new AWN().warning('Please enter a correct email', globalOptionsCheck);
    return;
  }
  
  inputFooter.style.borderColor = '#e8e8e2';

  const info = {
    email: email,
  };
  loader.classList.remove('visually-hidden');
  createSubscription(info)
    .then(data => {
      if (data.status === 201) {
        loader.classList.add('visually-hidden');
        showModalSecondCase();
      }
    })
    .catch(e => {
      if (e.response.status === 409) {
        loader.classList.add('visually-hidden');
        showModalFirstCase();
      } else {
        new AWN().warning(
          'Oops! Something went wrong!Your email address is incorrect. Please try again',
          globalOptionsError
        );
      }
    });
  evt.target.reset();
}
