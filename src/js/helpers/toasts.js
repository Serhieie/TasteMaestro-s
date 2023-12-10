import AWN from 'awesome-notifications';
// import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix-3.2.6.min.css';

function toastCheck() {
  const globalOptionsCheck = {
    labels: { warning: 'Warning' },
    icons: { warning: '<i class="fas fa-exclamation-triangle"></i>' },
    colors: { warning: '#FFA500' },
    maxNotifications: 1,
    durations: { global: 2000 },
  };
  return new AWN().warning('Please enter a correct email', globalOptionsCheck);
}
function toastWarning() {
  const globalOptionsError = {
    labels: { warning: 'Warning' },
    icons: { warning: '<i class="fas fa-exclamation-triangle"></i>' },
    colors: { warning: '#FFA500' },
    maxNotifications: 1,
    durations: { global: 4000 },
  };
  return new AWN().warning(
    'Oops! Something went wrong!Your email address is incorrect. Please try again',
    globalOptionsError
  );
}

function toastDeleted() {
  const globalOptionsDeleted = {
    labels: { warning: 'Warning' },
    icons: { warning: '<i class="fas fa-exclamation-triangle"></i>' },
    colors: { warning: '#FFA500' },
    maxNotifications: 1,
    durations: { global: 4000 },
  };
  return new AWN().warning('Item was deleted', globalOptionsDeleted);
}

export { toastCheck, toastWarning, toastDeleted };
