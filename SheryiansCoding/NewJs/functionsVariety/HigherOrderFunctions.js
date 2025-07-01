// Higher Order Functions
// Higher order functions are those functions which return a function or accept a function in its parameter

const abcd1 = (val)=>{
    return val()
} // Higher Order Function why - it is accepting a function in a parameter

abcd1(()=>{
    console.log('I am Higher Order Function')
})


const abcd2 = ()=>{
    return ()=>{
        console.log('I am returning a function')
    }
}
abcd2()() // Higher Order Function why - it is returning a function