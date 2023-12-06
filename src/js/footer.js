import { createSubscription } from "./apiService";

const form = document.querySelector('.footer-form-js');
form.addEventListener('submit', onSubmit);

const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;

function onSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.subscribe.value.trim().toLowerCase();
  
  if (!email.match(regex)) {
    return;
  }

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
      } 
    });
  evt.target.reset();
}


