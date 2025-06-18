const restFn01 = () => {
  return "NO PARAMETER";
};
console.log(restFn01(2, 4, 4, 5)); // NO PARAMETER

const restFn02 = (...arg) => {
  return arg;
};
console.log(restFn02(2, 4, 4, 5)); // [ 2, 4, 4, 5 ]
