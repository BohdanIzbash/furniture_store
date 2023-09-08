import { totalPrice } from "../cart/cart.js";
import { calcCartPrise } from "../calcPrice/calcCartPrice.js";
import { products } from "../addToCart/addToCart.js";
export const cartProductsList = document.querySelector(
  ".choosen-products-list"
);
export function cartRender(arr) {
  const cartItemHtml = arr
    .map(
      (product) => `
    <li class="choosen-product-item" id="${product.id}">
      <img src="${product.fields.image[0].url}" alt="err" />
      <div class="choosen-products-info">
        <p class="choosen-products-name">${product.fields.name}</p>
        <p class="choosen-products-price">${product.fields.price}</p>
        <button
          class="choosen-products-remove"
          data-action="choosen-products-remove"
        >
          remove
        </button>
      </div>
      </div>
          <div class="cart-items-counter counter-wrapper">
                    <div class="items-control" data-action="plus">+</div>
                    <div class="items-control" data-counter>${product.amount}</div>
                    <div class="items-control" data-action="minus">-</div>
                  </div>
    </li>`
    )
    .join("");

  cartProductsList.innerHTML = cartItemHtml;
}

export function checkEmptyCart(data) {
  if (data.length === 0) {
    const emptyCartHTML = `<li id="emptyCart" class="empty-cart">
                                <div class="empty-cart__title">Your cart is empty</div>
                            </li>`;
    cartProductsList.insertAdjacentHTML("afterbegin", emptyCartHTML);
  }

  if (data.length > 0) {
    const emptyCartEl = document.querySelector("#emptyCart");
    emptyCartEl ? emptyCartEl.remove() : null;
  }
}

export function totalPriceRender(data) {
  totalPrice.innerHTML = `<p class="total-price">Total: $${calcCartPrise(
    data
  )}</p>`;
}
