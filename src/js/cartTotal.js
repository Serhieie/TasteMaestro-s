import { getOrders } from "./apiService";


// function calculateTotalPrice() {
//   const totalPriceDiv = document.getElementById('total-price');
//   const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//   totalPriceDiv.textContent = `Total Price: ${total}`;
// }


const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', function(event) {
  const emailInput = document.getElementById('email');
  const isValidEmail = emailInput.checkValidity();

  if (!isValidEmail) {
    alert('Будь ласка, введіть дійсну електронну адресу.');
    event.preventDefault();
}
});

console.log()