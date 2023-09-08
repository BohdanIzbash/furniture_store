import { productsList } from "../request/request.js";
import { showProductsList } from "../render/render.js";
export const rangePrice = document.querySelector(".range");
export function rangeProductPrice() {
  let value = document.querySelector(".range-value>span");
  let rangedValue = rangePrice.value;
  let rangedProducts = productsList.filter(
    (product) => Math.round(product.fields.price) < rangedValue
  );
  value.innerText = `Value: $${rangedValue}`;
  showProductsList(rangedProducts);
}
