import { products } from "../addToCart/addToCart.js";
import { saveToLocalStorage } from "../localStorage/localStorage.js";
import { cartRender } from "../cartRender/cartRender.js";
import { totalPriceRender } from "../cartRender/cartRender.js";
export function productsCounter(event) {
  const parentNode = event.target.closest(".choosen-product-item");
  let counter;
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    const productInfo = products.find((element, index, array) => {
      return element.id === parentNode.id;
    });
    productInfo.amount++;
    counter.innerText = productInfo.amount;
    saveToLocalStorage("products", products);
    cartRender(products);
    totalPriceRender(products);
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      const productInfo = products.find((element, index, array) => {
        return element.id === parentNode.id;
      });
      productInfo.amount--;
      counter.innerText = productInfo.amount;
      saveToLocalStorage("products", products);
      cartRender(products);
      totalPriceRender(products);
    }
  }
}
