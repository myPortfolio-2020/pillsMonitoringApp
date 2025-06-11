const userRegular = {
  email: "user@ex.com",
  fullName: {
    userFullName: {
      fNm: "rabab",
      lNm: "zehra",
    },
  },
};

// console.log(userRegular.fullName.fNm) //rabab
console.log(userRegular["fullName"]); //{ userFullName: { fNm: 'rabab', lNm: 'zehra' } }

console.log(userRegular["fullName"]["userFullName"]["lNm"]); // zehra

// if something doesnot exist
// ? uses with api search, if you find any value to avoid if else conditions
const objOne = {
  nm: "kalash",
  sal: 456,
  fullAddress: {
    location1: "chine",
    location2: "usa",
  },
};

console.log(objOne.fullAddres?.location1); // indefined
console.log(objOne.fullAddress?.location1); // chine

// combining objects

const ayy = { 1: "a", 2: "b" };
const bee = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, ayy, bee);
// why giving empty {} means guarntee return value of both in this empty array otherwise ayy will contain merge value
// why assigning obj3, because Object.assign returns a value
console.log("obj3", obj3); // obj3 { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log({ ayy, bee }); // { ayy: { '1': 'a', '2': 'b' }, bee: { '3': 'c', '4': 'd' } }
console.log({ ...ayy, ...bee }); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//

const car = {
  1: 4,
  2: 4,
};
const truck = {
  3: 8,
  4: 2,
};

const drive1 = { ...car, ...truck };
console.log("drive1", drive1);

const shop1 = {
  nm: "shoppy",
  items: 100,
};

console.log(Object.keys(shop1)); // [ 'nm', 'items' ]
console.log(Object.entries(shop1)); // [ [ 'nm', 'shoppy' ], [ 'items', 100 ] ]
console.log(Object.values(shop1)); // [ 'shoppy', 100 ]

console.log(shop1.hasOwnProperty("items")); // true
