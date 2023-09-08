export function calcCartPrise(data) {
  const totalPrice = data.reduce((total, prod) => {
    total += prod.amount * prod.fields.price;
    return total;
  }, 0);
  return Math.round(totalPrice);
}
