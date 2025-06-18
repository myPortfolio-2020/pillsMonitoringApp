//&& AND - || OR - Operators

let a = true; // check first value
let b = true; // then second
// first was true so go to next
console.log(a && b); //true

let c = true; // first is true so go to next
let d = false;
console.log(c && d); // false

let e = false; // first is false so do not go farther
let f = true;
console.log(e && f); // false

let g = false;
let h = false;
console.log(g && h); // false

let i = true;
let j = false;

const abc = (name) => {
  return name;
};

console.log(i && abc("harry")); // harry
console.log(j && abc("harry")); // false

/* ------------------------------------- */
/* OR OPERATOR */
/* ------------------------------------- */
let k = true;
let l = true;
console.log(k || l); // true

let m = false;
let n = true;
console.log(m || n); // true

let o = true;
let p = false;
console.log(o || p); // true

let q = false;
let r = false;
console.log(q || r); // false

let s = true;
let sFn = (nm) => {
  return nm;
};
console.log(s || sFn("Harray")); // true

let t = false;
let tFn = (nm) => {
  return nm;
};
console.log(t || tFn("Harry")); // Harry
