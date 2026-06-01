let cart = [];

let addToCart = function (item, price, quantity = 1) {
  cart.push({ id: cart.length + 1, item, price, quantity });
};

let removeFromCart = function (id) {
  let result = cart.filter((ele) => ele.id !== id);
  cart = [...result];
};

let calculateTotal = function () {
  let total = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
  return total.toLocaleString("en-In");
};

let quantityUpdate = function (id, updatedQuantity) {
  cart.find((ele) => ele.id == id).quantity = updatedQuantity;
};

let showCartItems = function () {
  cart.forEach((ele) => {
    console.log(
      `ID: ${ele.id},\n Item : ${ele.item},\n Price: ${ele.price},\n Quantity: ${ele.quantity}`,
    );
  });
};

addToCart("Hyundai Venue Diesel MT White", 1150000, 1);
addToCart("iphone 17 pro", 130000, 3);
addToCart("macbook air m5", 110000, 1);
addToCart("kushaq 1.5 dsg", 2150000, 1);
removeFromCart(4);
quantityUpdate(2, 5);

showCartItems();
let totalPrice = calculateTotal();
console.log("\nTotal Price: \u20B9", totalPrice);
