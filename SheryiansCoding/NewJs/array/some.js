// some - gives true or false 

let array = [55,66,77,33,89,99]

const ifSome = array.some((val)=>{
    if(val >=90){
        return val;
    }
})

console.log(ifSome) // true