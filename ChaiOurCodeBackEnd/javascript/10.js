// memory type - stack and heap
// primitive type  - stack - create copy
// refenernce type - heap - refernece

// primitive type
let nm = "Pakistan";
let newLoc = nm;
newLoc = "usa";

console.log("nm", nm); // pakistan
console.log("newLoc", newLoc); // usa

// refenernce type

let obj1 = {
  country: "Pakistan",
};

let obj2 = obj1;

obj2.country = "USA";

console.log(obj1.country); // USA
console.log(obj2.country); // USA


// stack
// obj1
// obj2

// heap {country: "Pakistan"};  // value sits in heap
  

