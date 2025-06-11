const funFn1 = (...ab) => {
  return ab;
};

console.log(funFn1(200, 300, 500)); // [ 200, 300, 500 ]

const userObj = {
  nm: "jim",
  sal: 55,
};

const objectFn = (anyObj) => {
  return `${anyObj.nm} is earning ${anyObj.sal}`;
};
console.log(objectFn(userObj)); // jim is earning 55
// return anyObj
//console.log(objectFn(userObj)); // { nm: 'jim', sal: 55 }

console.log(objectFn({ nm: "rakshi", sal: 789 }));

/// now with array

const myArray = [1, 2, 3, 4];

const arrayFn = (arrayVal) => {
  return arrayVal;
};

console.log(arrayFn(myArray)); // [ 1, 2, 3, 4 ]
console.log(arrayFn(["tata", "bata"])); // [ 'tata', 'bata' ]

// specific value

const array3 = ["pencil", "sharpner", "eraser"];

const anySpecificArrayValueFn = (arrayValue,num ) => {
  
  return arrayValue[num];
};

console.log(anySpecificArrayValueFn(array3,1)); // eraser
