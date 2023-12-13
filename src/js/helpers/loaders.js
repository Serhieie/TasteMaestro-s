import COMMONS from '../commons.js';
function showLoader() {
  COMMONS.loader.classList.remove('visually-hidden');
}
function hideLoader() {
  COMMONS.loader.classList.add('visually-hidden');
}

function showLoaderProductList() {
  COMMONS.loaderProductList.classList.remove('visually-hidden');
  COMMONS.loadersSmall.classList.remove('visually-hidden');
  return (COMMONS.isFetching = !COMMONS.isFetching);
}
function hideLoaderProductList() {
  COMMONS.loaderProductList.classList.add('visually-hidden');
  COMMONS.loadersSmall.classList.add('visually-hidden');
  return (COMMONS.isFetching = !COMMONS.isFetching);
}

export { showLoader, hideLoader, showLoaderProductList, hideLoaderProductList };
