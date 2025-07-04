// ...................................................................
// Example 1  - add numbers
const scoreBoard = (...score) => {
  let total = 0;
  score.forEach((val) => {
    total = total + val;
  });
  return total;
};
const score = scoreBoard(100, 300, 400);
console.log(score); // 800
// ...................................................................

// ...................................................................
// Example 2

const checkAge = (user, age) => {
  if (age < 18) return `Sorry ${user}, you are not Allowed`;
  return `Yes! ${user}, you are allowed`;
};
console.log(checkAge("Khalid", 12)); //Sorry Khalid, you are not Allowed
console.log(checkAge("Majid", 19)); //Yes! Majid, you are allowed
// ...................................................................
// ...................................................................

// Example 3

const anyFunWithNoReturn = () => {
  return;
};
console.log(anyFunWithNoReturn()); //undefined
// ...................................................................
// ...................................................................

// Example 4
// what does it mean when we say functions are FIRST CLASS CITIZEN?
// // /// ///// Basically it means you can treat a function as a variable
//
// ...................................................................
// ...................................................................

// Example
// Pass a function into another function an execute it inside

const passFn = (val) => {
  val();
};
passFn(() => {
  console.log("Passing a function into another function");
});
// ...................................................................
// ...................................................................

// Example

// what is the higher order function
// A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result (or both).
// ...................................................................
// ...................................................................

// Example

// ...................................................................
// ...................................................................

// Example
// ...................................................................
// ...................................................................

// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
// ...................................................................
// Example
// ...................................................................
