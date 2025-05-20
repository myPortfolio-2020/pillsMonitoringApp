// https://www.youtube.com/watch?v=2vVq1xXIL58&t=3s

// --------------------------------------------------
// forEach and map()
// --------------------------------------------------
let names = ["John", "Emma", "Michael", "Sarah", "David"];

names.forEach((value) => {
  console.log(value);
});
// let forEach = names.forEach((value) => {
//   console.log(value);
// });
// console.log("forEach", forEach); // forEach undefined

names = names.map((value) => {
  // return value + " Gi";
  return value;
});

console.log("names", names);

// --------------------------------------------------
// filter()
// --------------------------------------------------

const nm = ["Alex", "Bob", "Charlie", "Diana", "Eve"];

const filterFn = nm.filter((val) => {
  // return true;
  //   return true → keep all elements
  // return false → keep none
  // return someCondition → keep elements that meet the condition
  return val === "Alex";
});
console.log("nm", nm);
console.log("filterFn...", filterFn);

// --------------------------------------------------
// SPREAD operators
// --------------------------------------------------

// without spread optaor  // both pushing 44
let opt1 = [1, 2, 3, 4, 5];
let opt1Copy = opt1;
opt1Copy.push(44);

console.log("opt1", opt1); // [1, 2, 3, 4, 5,44]
console.log("opt1Copy", opt1Copy); // [1, 2, 3, 4, 5,44]

// WITH spread optaor only push 44 at opt2Copy
let opt2 = [1, 2, 3, 4, 5];
let opt2Copy = [...opt2];
opt2Copy.push(44);

console.log("opt2", opt2); // [1, 2, 3, 4, 5]
console.log("opt2Copy", opt2Copy); // [1, 2, 3, 4, 5,44]

// spread operator in objects

let obj1 = {
  nm: "salama",
  des: "dev",
};

let obj2 = { ...obj1 };

// --------------------------------------------------
// REST operators
// --------------------------------------------------

const restFn = (...rest) => {
  return rest;
};

console.log("restFn ", restFn(5, 6, 7, 8, 9));

const myNum = (a, b, c, ...d) => {
   console.log(a, b, c, d);
};

console.log("myNum: ", myNum(1, 2, 3, 4, 5, 6, 7));

// --------------------------------------------------
// REST operators
// --------------------------------------------------
