let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

function itemName(item) {
  return item.item;
}
function displayItemName(item) {
  console.log(item);
}
let itemLlist = cart.map(itemName);
itemLlist.forEach(displayItemName);

function getPrice(menuItem) {
  return menuItem.price * menuItem.quantity;
}

function sumTotal(total, itemTotalPrice) {
  return total + itemTotalPrice;
}

let prices = cart.map(getPrice);

let totalCost = prices.reduce(sumTotal, 0);

console.log(`The total cost of the cart is: $${totalCost.toFixed(2)}`);
