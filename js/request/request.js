export let productsList = [];
export async function getProductsList() {
  const res = await fetch("./json/products.json");
  productsList = await res.json();
  return productsList;
}
