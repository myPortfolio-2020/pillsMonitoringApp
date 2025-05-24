// example of forEach
// forEach loop doesnot return, it iterates

const arr = [1, 2, 3, 4];

const arrForEach = arr.forEach((val) => {
  console.log(`${val}* ${val}=${val * val}`);
});

console.log(arrForEach);
console.log(arr);

// map returns
// when to use map, when you want to create another array from an array

let mapArr = [1, 2, 3, 4];
const mapArrVal = mapArr.map((item) => {
  return item * item;
});

console.log("mapArrVal", mapArrVal);
console.log("array", mapArr);

// Filter
//

const arrFilter = [22, 33, 44, 55, 122, 1, 2, 3];

const filterArr = arrFilter.filter((val) => val > 30);

const filterArr2 = arrFilter.filter((val) => {
  if (val > 50) {
    return true;
  }
});

console.log(filterArr);

console.log(arrFilter);
console.log(filterArr2);

// find
// find as soon as condition meet
const arrayFind = [22, 33, 44];
const arrFind = arrayFind.find((val) => {
  if (val > 13 && val !== 33) {
    return val;
  }
});

console.log(arrFind);

// indexOf
// find element index number,
// if does nt find then -1
const indexOffArr = [33, 44, 66];
const indexOff = indexOffArr.indexOf(100);
console.log(indexOff);

//object

const obj = {
  nm: "Harsh",
  age: 44,
};

const gama = "game zone red";

const obj2 = {
  nm: "kareem",
  game: gama,
  round: 4,
};

console.log(obj2.game);
console.log(obj2["game"]);

// freeze

console.log(obj2.round);
obj2.round = 6;
// after applying Object.freeze(objectNmae)
Object.freeze(obj2);
obj2.round = 12;

console.log(obj2.round);

// const findLength

const findLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findLength.length);

const fnLength = (a, b) => {
  console.log("fnLength");
};

console.log(fnLength.length);

//

const returnOne = () => {
  return "hi";
};

const returnTwo = () => {
  return "bye";
};

console.log(returnTwo());
console.log(returnOne());

// synchronous and asynchronus

// synchronus - code runs line by line
// asyn - code sits in a seprate stack and when syn code done then it runs

const getData = async () => {
  // await
  const data = await fetch("https://randomuser.me/api");
  const res = await data.json();
  console.log(res.results[0]);
};
getData();

import chalk from "chalk";

console.log(chalk.green("Success! The operation was completed."));
console.log(chalk.red("Error! Something went wrong."));
console.log(chalk.blue("Info: This is a useful message."));
console.log(chalk.yellow("Warning! Be careful."));
console.log(chalk.bgMagenta.white("Highlighted text with a background color."));
