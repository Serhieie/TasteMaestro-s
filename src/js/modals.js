// First case - Subscription has been already done
// Second case - Subscription success

const refs = {
  backdrop: document.querySelector('.js-backdrop'),
  modalFirstCase: document.querySelector('.js-modal-first-case'),
  modalSecondCase: document.querySelector('.js-modal-second-case'),
  closeBtn: document.querySelectorAll('.js-close'),
  checkoutModal: document.querySelector('.js-checkout-modal'),
  body: document.querySelector('body'),
};

function onClickFirstCase() {
  refs.backdrop.classList.add('visually-hidden');
  refs.modalFirstCase.classList.add('visually-hidden');
  refs.body.classList.remove('modal-is-open');
  BtnFistCase.removeEventListener('click', onClickFirstCase);
  document.removeEventListener('keydown', onEscapeFirstCase);
}

function onClickSecondCase() {
  refs.backdrop.classList.add('visually-hidden');
  refs.modalSecondCase.classList.add('visually-hidden');
  refs.body.classList.remove('modal-is-open');
  document.removeEventListener('keydown', onEscapeFirstCase);
}

function onEscapeFirstCase(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    refs.backdrop.classList.add('visually-hidden');
    refs.modalFirstCase.classList.add('visually-hidden');
    refs.body.classList.remove('modal-is-open');
    document.removeEventListener('keydown', onEscapeFirstCase);
  }
}

function onEscapeSecondCase(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    refs.backdrop.classList.add('visually-hidden');
    refs.modalSecondCase.classList.add('visually-hidden');
    refs.body.classList.remove('modal-is-open');
    document.removeEventListener('keydown', onEscapeSecondCase);
  }
}

function backdropFirstCase() {
  refs.backdrop.classList.add('visually-hidden');
  refs.modalFirstCase.classList.add('visually-hidden');
  refs.body.classList.remove('modal-is-open');
  refs.backdrop.removeEventListener('click', backdropFirstCase);
  document.removeEventListener('keydown', onEscapeFirstCase);
}

function backdropSecondCase() {
  refs.backdrop.classList.add('visually-hidden');
  refs.modalSecondCase.classList.add('visually-hidden');
  refs.body.classList.remove('modal-is-open');
  document.removeEventListener('keydown', onEscapeSecondCase);
}

const BtnFistCase = refs.closeBtn[0];
function showModalFirstCase() {
  refs.backdrop.classList.remove('visually-hidden');
  refs.modalFirstCase.classList.remove('visually-hidden');
  refs.body.classList.add('modal-is-open');
  BtnFistCase.addEventListener('click', onClickFirstCase);
  document.addEventListener('keydown', onEscapeFirstCase);
  refs.backdrop.addEventListener('click', backdropFirstCase);
}

function showModalSecondCase() {
  refs.backdrop.classList.remove('visually-hidden');
  refs.modalSecondCase.classList.remove('visually-hidden');
  refs.body.classList.add('modal-is-open');
  const BtnSecondCase = refs.closeBtn[1];
  BtnSecondCase.addEventListener('click', onClickSecondCase);
  document.addEventListener('keydown', onEscapeSecondCase);
  refs.backdrop.addEventListener('click', backdropSecondCase);
}

function showCheckoutModal() {
  refs.backdrop.classList.remove('visually-hidden');
  refs.checkoutModal.classList.remove('visually-hidden');
  refs.body.classList.add('modal-is-open');
  const BtnCheckoutClose = refs.closeBtn[2];
  BtnCheckoutClose.addEventListener('click', onClickCheckoutClose);
  document.addEventListener('keydown', onEscapeCheckout);
  refs.backdrop.addEventListener('click', backdropCheckout);
}

function onClickCheckoutClose() {
  refs.backdrop.classList.add('visually-hidden');
  refs.checkoutModal.classList.add('visually-hidden');
  refs.body.classList.remove('modal-is-open');
  document.removeEventListener('keydown', onEscapeFirstCase);
}

function onEscapeCheckout(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    refs.backdrop.classList.add('visually-hidden');
    refs.checkoutModal.classList.add('visually-hidden');
    refs.body.classList.remove('modal-is-open');
  }
  document.removeEventListener('keydown', onEscapeCheckout);
}

function backdropCheckout() {
  refs.backdrop.classList.add('visually-hidden');
  refs.checkoutModal.classList.add('visually-hidden');
  refs.body.classList.remove('modal-is-open');
  document.removeEventListener('keydown', onEscapeFirstCase);
}

function toggleModalApear() {
  refs.modalSecondCase.classList.toggle('visually-hidden');
  refs.checkoutModal.classList.toggle('visually-hidden');
}

export { showModalFirstCase, showModalSecondCase, showCheckoutModal };
