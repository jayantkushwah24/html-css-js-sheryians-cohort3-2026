// operators

let a = 100;
let b = 45;

// arithmetic operator
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b); // exponent
console.log(a / b); // division -> quotient
console.log(a % b); // division -> remainder

// assignment operator
let sum = a + b;
sum += a;
sum -= a;
sum *= a;
sum *= a;
sum /= a;
sum %= a;

// relational operator]
console.log(a < b);
console.log(a <= b);
console.log(a > b);
console.log(a >= b);

// logical operator
console.log(a && b);
console.log(a || b);
console.log(a > b && b < 100);
console.log(!a > b);

// bitwise operator
console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~b);

// special numbers
console.log(0);
console.log(-0);
console.log(NaN);
console.log(NaN == NaN); // false
console.log(typeof NaN); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(+Infinity);
console.log(-Infinity);

// equality operators
let c = "100";
console.log(a == c); // if diff data type then do coerison
console.log(a === c); // if diff data type then return false dont do coersion