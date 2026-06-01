// Find total price of shopping cart.

let cart = [
  { item: "Book", price: 10 },
  { item: "Pen", price: 5 },
  { item: "Notebook", price: 15 },
];

let cartTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(cartTotal);
