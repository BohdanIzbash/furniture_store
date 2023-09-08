import { productsList } from "../request/request.js";
import { showProductsList } from "../render/render.js";
export function productsFilter(event) {
  if (event.target.dataset.filter === "all") {
    showProductsList(productsList);
    return;
  }
  let filteredProducts = productsList.filter(
    (product) =>
      product.fields.company.toLowerCase() ===
      event.target.dataset.filter.toLowerCase()
  );
  showProductsList(filteredProducts);
}
