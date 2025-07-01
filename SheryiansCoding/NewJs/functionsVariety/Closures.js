// Closures
// Function which returns another function and that return function will always use any variable from its parent function


const closureFn = ()=>{
    let a = 12;
    return ()=>{
        console.log(a)
    }
}

// closureFn() - NO - Why -you need to call the inner function
const innerFn = closureFn()
innerFn()