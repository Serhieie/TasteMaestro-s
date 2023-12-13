const btnToUp = document.querySelector('.btn-up');
const body = document.body;

btnToUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.onscroll = () => {
  if (body.classList.contains('modal-is-open')) {
    return btnToUp.classList.add('visually-hidden');
  } else if (window.scrollY > 600) {
    btnToUp.classList.remove('visually-hidden');
    btnToUp.classList.remove('btn-up-hidden');
  } else if (window.scrollY < 600) {
    btnToUp.classList.add('visually-hidden');
  }
};

export { btnToUp };
