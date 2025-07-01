// First Class Functions
// Functions can be assigned to variables.
// Functions can be passed as arguments.
// Functions can be returned from other functions.

// --------------------------------------------------------------

const fCF3 = (example3) => {
  return example3;
};

const returnFCF = fCF3(() => {
  return "h1";
});

returnFCF();
