const fn1 = () => {
  return "hi";
};

console.log(fn1);
console.log(fn1());

function abcd() {
  console.log("this is called function statement ");
}

//function expression

const fnc002 = function () {
  return "hhthis is the function expressioni";
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
