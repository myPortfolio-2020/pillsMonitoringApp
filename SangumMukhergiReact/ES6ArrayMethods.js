// map
const array1 = [1, 2, 3, 4, 5, 6, 7];

const mapMet = array1.map((ele) => {
  return ele;
});

console.log(mapMet); // [  1, 2, 3, 4,  5, 6, 7]

// filter
const filterMet = array1.filter((ele) => ele >= 4);
console.log(filterMet); // [ 4, 5, 6, 7 ]

// find
const findMet = array1.find((ele) => ele === 4);
console.log(findMet); //

const personsArray = [
  {
    nm: "Jamal",
    city: "Islamabad",
    sal: 4567,
  },
  {
    nm: "Kamal",
    city: "Karachi",
    sal: 8867,
  },
  {
    nm: "Dhamaml",
    city: "Lahore",
    sal: 2567,
  },
  {
    nm: "Tammal",
    city: "Islamabad",
    sal: 9567,
  },
  {
    nm: "Behaar",
    city: "Islamabad",
    sal: 4567,
  },
  {
    nm: "Jamal",
    city: "Lahore",
    sal: 4567,
  },
  {
    nm: "Monaal",
    city: "Karachi",
    sal: 4567,
  },
];

const city = personsArray.filter((item) => item.city === "Karachi");
console.log(city);

//map creates a new array
const map = [1, 2, 3, 4];

const newMapCreated = map.map((item) => item * 2);

console.log(map); // [ 1, 2, 3, 4 ]
console.log(newMapCreated); // [ 2, 4, 6, 8 ]

map.push(5);

console.log(map); // [ 1, 2, 3, 4, 5 ]
console.log(newMapCreated); // [ 2, 4, 6, 8 ]
