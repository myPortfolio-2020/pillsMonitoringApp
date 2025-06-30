function abcd() {
  console.log("this is called function statement ");
}

//function expression

const fnc002 = function () {
  return "hhthis is the function expression";
};

// if fatArrow function
const fnc = () => {
  return "Fat arrow function";
};

let ifNoValue = (v1) => {
  return v1;
};
console.log(ifNoValue()); // undefined

// undefined  why

let efg;
console.log(efg); // undefined

// if you decalre a variable as let efg, but you did not initialize the value then output will be undefined

// if
const xyz = (v1, v2) => {
  return v1 + v2;
};

console.log(xyz(1, 2)); //3
console.log(xyz()); // NaN why you can not concat undefined + undefined
