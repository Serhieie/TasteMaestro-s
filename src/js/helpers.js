import COMMONS from './commons.js';

function showLoader() {
  COMMONS.loader.classList.remove('visually-hidden');
}
function hideLoader() {
  COMMONS.loader.classList.add('visually-hidden');
}

export default { showLoader, hideLoader };
