// !!0
// falsy value
// truthy value

// falsy value
// !!0
// false
// !!undefined
// false
// !!null
// false
// !!false
// false
// !!""
// !!document.all
// false
// NaN
// false

if (NaN) {
  console.log("this is considered as falsy");
}

// rest of all will convert into true
if (-1) {
  console.log("it will convert into true (-1 === true)");
}
// predict
// 

let x = 100
let y = 200

let z = x < 20 || y > 100

// false true

console.log(z)


///