// ------------------------------------------------------
// Maths Funcions
// ------------------------------------------------------
console.log(Math.round(22.4)); // doing round fig as maths rule
console.log(Math.round(22.5));

console.log(Math.floor(456.1)); // drop after dec
console.log(Math.ceil(90.1)); // raise 1 if any dig after .
console.log(Math.trunc(456.1)); // removes the decimal part (truncates).

console.log(Math.floor(-456.9)); // → -457
console.log(Math.trunc(-456.1)); // → -456

console.log(Math.floor(10.1)); // 10
console.log(Math.trunc(10.1)); // 10

console.log(Math.floor(10.9)); // 10
console.log(Math.trunc(10.9)); // 10

console.log(Math.floor(-10.4)); // -11
console.log(Math.floor(-10.9)); // -11
console.log(Math.trunc(-10.9)); // -10

console.log(Math.pow(3, 3)); // 3 ^ 3 ans 27
console.log(Math.sqrt(9)); // squareRoot 3
console.log(Math.sqrt(64)); // squareRoot 8

console.log(Math.cbrt(64)); // ∛  4

console.log(Math.abs(100)); //  absolute value 100
console.log(Math.abs(-100)); // convert negative value to positive = 100

console.log(Math.max(100, 200, 200, 300)); // 300
console.log(Math.min(100, 200, 200, 300)); // 100

console.log(Math.random()); // any number  it can return values like 0, 0.453, 0.999999, etc., but never exactly 1. means its range is  0 - 1 but never exact 1

console.log(Math.floor(Math.random() * 100) + 1);

// if we want OTP OF 4 DIGITS
console.log(Math.floor(Math.random() * 1000) + 1000);
// if we want OTP OF 6 DIGITS
console.log(Math.floor(Math.random() * 1000) + 100000);

let anyNumToFix = 56.4566;

console.log(anyNumToFix.toFixed(2)); // 56.46 Notice last digs after dec round as .46

// calculate area and parameter of rectangle
