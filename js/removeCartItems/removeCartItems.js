import { saveToLocalStorage } from "../localStorage/localStorage.js";
import { products } from "../addToCart/addToCart.js";
import { checkEmptyCart, totalPriceRender } from "../cartRender/cartRender.js";
import { headerCounter } from "../render/render.js";
export const removeCartItems = (data) => (event) => {
  if (event.target.dataset.action !== "choosen-products-remove") {
    return;
  }
  const parentNode = event.target.closest(".choosen-product-item");
  const id = parentNode.getAttribute("id");
  const index = data.findIndex((product) => product.id === id);
  data.splice(index, 1);
  totalPriceRender(products);
  saveToLocalStorage("products", products);
  parentNode.remove();
  checkEmptyCart(products);
  headerCounter();
};
