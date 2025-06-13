// to avoid global pollution, we use IFFE
// ()(); don't forget ; semicolon after IFFE

// (define function)()

// IFFE Ex1
// Named IFFE chai()
(function chai() {
  console.log("EnjoyTea");
})();

// IFFE Ex2
(() => {
  console.log("IFFE with arrao funtion");
})();

// IFFE Ex3 with parameters

((name) => {
  console.log(`${name} on IFFE `);
})("Hestesh Sir");

// Runs immediately after it's defined
// Not reusable (not accessible after execution)
// Creates a new local scope to avoid polluting global scope
// Use IIFE when you want to execute code immediately and isolate variables (e.g., modules or setup logic).

// ---------------------------------------------------------

// Regular Function
function chai() {
  console.log("EnjoyTea");
}
chai();
// Runs only when called later
// Reusable – can be called multiple times
// Declares a named function in the current scope
// Use regular functions when you want to define reusable functionality.
