import { productsList } from "../request/request.js";
import { showProductsList } from "../render/render.js";
export function searchProduct(event) {
  const eventTarget = event.target.value.toLowerCase();
  let findedProducts = productsList.filter((product) =>
    product.fields.name.toLowerCase().includes(eventTarget)
  );
  showProductsList(findedProducts);
}
