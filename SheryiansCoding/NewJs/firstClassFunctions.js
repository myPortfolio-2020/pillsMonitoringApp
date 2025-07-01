// First Class Functions
// Functions can be assigned to variables.
// Functions can be passed as arguments.
// Functions can be returned from other functions.

// --------------------------------------------------------------

const firstClassFn = (val) => {
  return val();
};

firstClassFn(function () {
  console.log("hi, I am first class function");
});

// --------------------------------------------------------------

const firstClassFn2 = (fcfn2) => {
  return fcfn2();
};

firstClassFn2(() => {
  console.log("I am another example of fcf");
});

// --------------------------------------------------------------

