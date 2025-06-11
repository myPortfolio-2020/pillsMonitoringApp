// destructuring

const user = {
  empId: 11,
  salary: 456,
  empDept: "Finance",
  address: {
    fnm: "hira",
    lnm: "hina",
  },
};

const { empId: eId, salary: sal, empDept: dept, address: add } = user;

console.log(eId); // 11
console.log(sal); // 456
console.log(add?.fnm); //hira
