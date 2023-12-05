const btnToUp = document.querySelector('.btn-up');
btnToUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.onscroll = () => {
  if (window.scrollY > 600) {
    btnToUp.classList.remove('visually-hidden');
    btnToUp.classList.remove('btn-up-hidden');
  } else if (window.scrollY < 600) {
    btnToUp.classList.add('visually-hidden');
  }
};

export { btnToUp };
