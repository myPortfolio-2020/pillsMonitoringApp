// Pure and Impure Functions

// Pure - which dont change its value from outside
// Impure functions - which having side effects

// ------------------------------------

let a = 12;

// Pure function: doesn't depend on or change external state
const pureFunction = () => {
  return "I am a PURE FUNCTION"; // Always returns the same output
};

console.log(pureFunction()); // "I am a PURE FUNCTION"

// Impure function: changes external state (mutates variable a)
const impureFunction = () => {
  return a++; // Depends on and modifies external variable 'a'
};

console.log(impureFunction()); // 12
console.log(impureFunction()); // 13
