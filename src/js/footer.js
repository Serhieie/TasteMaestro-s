import { createSubscription } from './api-servise/api-service-basic';
import 'awesome-notifications/dist/style.css';
import { showModalFirstCase, showModalSecondCase } from './modals';
import { toastCheck, toastWarning } from './helpers/toasts';

const form = document.querySelector('.footer-form-js');
const inputFooter = document.querySelector('#subscribe');
form.addEventListener('submit', onSubmit);
const loader = document.querySelector('.loader-container');

const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

function onSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.subscribe.value.trim().toLowerCase();

  if (!email.match(regex)) {
    inputFooter.style.borderColor = 'red';
    toastCheck();
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
        toastWarning();
      }
    });
  evt.target.reset();
}
