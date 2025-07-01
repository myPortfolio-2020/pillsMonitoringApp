// First Class Functions
// Functions can be assigned to variables.
// Functions can be passed as arguments.
// Functions can be returned from other functions.

// --------------------------------------------------------------

const fCF = (example3) => {
  return example3;
};

const returnFCF = fCF(() => {
  return "h1";
});

returnFCF();
