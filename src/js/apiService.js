import axios from "axios";
// async function fetchContactsById(id) {
//   return await axios.get(`${BASE_URL}/contacts/${id}`);
// }
// async function createContact(data) {
//   return await axios.post(`${BASE_URL}/contacts`, data);
// }
async function createSubscription(data) {
  return await axios.post(
    `https://food-boutique.b.goit.study/api/subscription`,
    data
  );
}

export {createSubscription}