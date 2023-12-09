import COMMONS from './commons.js';
function showLoader() {
  COMMONS.loader.classList.remove('visually-hidden');
  COMMONS.isFetching = true;
}
function hideLoader() {
  COMMONS.loader.classList.add('visually-hidden');
  COMMONS.isFetching = true;
}
export default { showLoader, hideLoader };
