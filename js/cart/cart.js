import { cartRender, totalPriceRender } from "../cartRender/cartRender.js";
import {
  getLocalStorageData,
  removeLocalStorage,
  saveToLocalStorage,
} from "../localStorage/localStorage.js";
import { checkEmptyCart } from "../cartRender/cartRender.js";
import { products } from "../addToCart/addToCart.js";
import { cartProductsList } from "../cartRender/cartRender.js";
import { headerCounter } from "../render/render.js";
export const backdrop = document.querySelector(".backdrop");

export let totalPrice = document.querySelector(".cart-total-price");
export const sheckoutBtn = document.querySelector(".cart-checkout-btn");
export function cartClose() {
  backdrop.classList.add("is-hidden");
}

export function cartOpen() {
  backdrop.classList.remove("is-hidden");
  let products;
  products = getLocalStorageData("products");
  cartRender(products);
  totalPriceRender(products);
  checkEmptyCart(products);
}

export function cartCheckout(event) {
  if (event.target.dataset.action !== "checkout") {
    return;
  }
  if (getLocalStorageData("products")) {
    const products = getLocalStorageData("products");
    products.splice(0, products.length);
    cartProductsList.innerHTML = "";
    backdrop.classList.add("is-hidden");
    saveToLocalStorage("products", products);
    headerCounter();
  }
}
