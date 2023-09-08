import { saveToLocalStorage } from "../localStorage/localStorage.js";
import { getLocalStorageData } from "../localStorage/localStorage.js";
import { productsList } from "../request/request.js";
import { headerCounter } from "../render/render.js";
export let products = [];

if (localStorage.getItem("products")) {
  products = getLocalStorageData("products");
}
export const addToCart = (data) => (event) => {
  if (event.target.dataset.action !== "add-to-cart") {
    return;
  }
  const card = event.target.closest(".product-card");
  const productInfo = productsList.find((element, index, array) => {
    return element.id === card.id;
  });
  const addedProduct = products.find((element, index, array) => {
    return element.id === card.id;
  });
  if (addedProduct) {
    productInfo.amount++;
    saveToLocalStorage("products", products);
    return;
  }
  data.push({ ...productInfo, amount: 1 });
  saveToLocalStorage("products", data);
  headerCounter();
};
