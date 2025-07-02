// foreach

let forEach01 = [12, 33, 44, 65, 67];

forEach01.forEach((val) => {
  console.log(val);
});

//map
// when to use - when you need to create a new map
// map means - create an empty array in your mind as soon as you write any.map()

const mapArray = [1, 2, 3, 4, 5];

let newArrayCreated = mapArray.map((val) => {
  return 12;
});

console.log(mapArray); // [ 1, 2, 3, 4, 5 ]
console.log(newArrayCreated); // [ 12, 12, 12, 12, 12 ]

// you are not giving return
const mapArray02 = [12, 122, 333, 24, 55];

const newArr02 = mapArray02.map((val) => {
  if (val > 100) return val;
});

console.log("no return", newArr02); // no return [ undefined, 122, 333, undefined, undefined ]
