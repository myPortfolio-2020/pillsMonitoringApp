// Hoisting
//................................................................
// Example 1 - function statement
abc();

function abc() {
  return "hi";
}
// it will execute althought is going to execute before the declaration

//................................................................


//................................................................

// Example 2  - arrow Function

// xyz()
const xyz = () => {
  return "Hi Bye!";
};
// It will not execute before declaration
//................................................................


//................................................................

// Example 3 - function expression

// funExpre()
const funExpre = function () {
  return "hi";
};
// It will not execute before declaration

//................................................................


