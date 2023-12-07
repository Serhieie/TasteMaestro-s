import { createSubscription } from './apiService';

const form = document.querySelector('.footer-form-js');
const inputFooter = document.querySelector('#subscribe');
form.addEventListener('submit', onSubmit);

const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;

// const paramsNotif = {
//   position: 'center-center',
//   timeout: 2000,
//   width: '400px',
//   fontSize: '24px',
// };

function onSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.subscribe.value.trim().toLowerCase();

  if (!email.match(regex)) {
    inputFooter.style.borderColor = 'red';
    return;
  }
  inputFooter.style.borderColor = '#e8e8e2';

  const info = {
    email: email,
  };
  createSubscription(info)
    .then(data => {
      if (data.status === 201) {
        console.log('Thanks for subscribing for nnew products');
      }
    })
    .catch(e => {
      if (e.response.status === 409) {
        console.log('This email address has already been entered');
      } else {
        console.log(
          'Oops! Something went wrong!Your email address is incorrect'
        );
      }
    });
  evt.target.reset();
}
