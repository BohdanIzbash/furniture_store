import { products } from "../addToCart/addToCart.js";
import { getLocalStorageData } from "../localStorage/localStorage.js";
export const productsListHTML = document.querySelector(".products-items");
export const mainPageItemsHTML = document.querySelector(".fut-items");
export const headerCartCounter = document.querySelector(".header-cart-counter");
export function showProductsList(arr) {
  const productsHTML = arr
    .map(
      (product) => `<li class="product-card" id="${product.id}">
        <img class="card-img" src="${product.fields.image[0].url}" alt="err" />
        <div class="prod-card-text">
        <div class="prod-card-info">
        <p class="prod-card-dscrp">"${product.fields.name}"</p>
        <p class="prod-card-price">$${product.fields.price}</p>
        </div>
          <button class="add-to-cart-btn" data-action="add-to-cart">Add to cart</button>
          </div>
      </li>`
    )
    .join("");
  if (productsListHTML) {
    productsListHTML.innerHTML = productsHTML;
  }
}

export function mainPageItems(arr) {
  let randomCard;
  const randomItems = [];
  for (let i = 0; i < 3; i++) {
    randomCard = Math.floor(Math.random() * arr.length);
    randomItems.push(arr[randomCard]);
  }
  const mainPageProductsHTML = randomItems
    .map(
      (product) =>
        `<li class="fut-card">
      <a href="./products.html"><img src="${product.fields.image[0].url}" alt="err" /></a>
      <div class="fut-item-text">
        <p class="fut-item-dscrp">${product.fields.name}</p>
        <p class="fut-item-price">$${product.fields.price}</p>
      </div>
    </li>`
    )
    .join("");

  if (mainPageItemsHTML) {
    mainPageItemsHTML.innerHTML = mainPageProductsHTML;
  }
}

export function headerCounter() {
  headerCartCounter.classList.toggle("is-hidden", products.length <= 0);
  headerCartCounter.innerText = products.length;
}
