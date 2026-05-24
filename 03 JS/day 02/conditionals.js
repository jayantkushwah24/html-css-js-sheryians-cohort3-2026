// conditionals - decision making capablities of js

// if
let age = 26;
if (age >= 18) {
  console.log("You are an adult");
}

// if else
let isPremiumUser = false;
let isVipUser = true;
if (isPremiumUser) {
  console.log("Welcome , Enjoy all our premium content");
} else if (isVipUser) {
  console.log(
    "Welcome , Enjoy your VIP content. Upgrade to premium membership.",
  );
} else {
  console.log("Please join  either Premium or VIP membership");
}
