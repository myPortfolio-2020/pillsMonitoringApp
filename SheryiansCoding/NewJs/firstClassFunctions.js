// First Class Functions

const firstClassFn = (val) => {
   return val();
};

firstClassFn(function () {
  console.log("hi, I am first class function");
});
