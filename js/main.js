import { headerCounter, showProductsList } from "./render/render.js";
import { getProductsList, productsList } from "./request/request.js";
import { productsFilter } from "./products nav/filter.js";
import { rangeProductPrice } from "./products nav/range.js";
import { searchProduct } from "./products nav/search.js";
import { rangePrice } from "./products nav/range.js";
import { cartClose } from "./cart/cart.js";
import { cartOpen } from "./cart/cart.js";
import { productsCounter } from "./counter/counter.js";
import { addToCart } from "./addToCart/addToCart.js";
import { products } from "./addToCart/addToCart.js";
import { removeCartItems } from "./removeCartItems/removeCartItems.js";
import { checkEmptyCart } from "./cartRender/cartRender.js";
import { cartCheckout } from "./cart/cart.js";
import { mainPageItems } from "./render/render.js";
const filterItems = document.querySelector(".filter");
const searchInput = document.querySelector(".search");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cartOpenBtn = document.querySelector(".cart-logo");

async function mainFunc() {
  let productList = await getProductsList();
  showProductsList(productList);
  mainPageItems(productList);
}
mainFunc();

filterItems?.addEventListener("click", productsFilter);

rangePrice?.addEventListener("change", rangeProductPrice);

searchInput?.addEventListener("input", searchProduct);

cartOpenBtn?.addEventListener("click", cartOpen);

cartCloseBtn?.addEventListener("click", cartClose);

window.addEventListener("click", productsCounter);

window.addEventListener("click", addToCart(products));

window.addEventListener("click", removeCartItems(products));

window.addEventListener("click", cartCheckout);

headerCounter();
