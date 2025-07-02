// Closures
// Function which returns another function and that return function will always use any variable from its parent function

const closureFn = () => {
  let a = 12;
  return () => {
    console.log(a);
  };
};

// closureFn() - NO - Why -you need to call the inner function
const innerFn = closureFn();
innerFn();

// chatGpt
// ----------------------------------------------------------------
// Write a function createCounter that returns another function. Each time the inner function is called, it should increment a counter and return the new value.
//-----------------------------------------------------------------
//Write a function multiplyBy that takes a number as an argument and returns a function. That returned function takes another number and multiplies it by the first.
//-----------------------------------------------------------------
//Create a function secretHolder(secret) that returns an object with two methods: getSecret and setSecret. These methods should allow access to a private variable.
//-----------------------------------------------------------------
//Write a function delayedLogger that takes an array of strings and logs each string after a delay equal to its index * 1000 milliseconds. Use a closure to capture the correct value.
//-----------------------------------------------------------------
//Create a function once that accepts another function as input and returns a new function that can only be called once. After the first call, it should return the same result without calling the original function again.
//-----------------------------------------------------------------
