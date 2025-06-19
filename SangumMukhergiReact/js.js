// map
const array1 = [1,2,3,4,5,6,7]

const mapMet = array1.map((ele)=>{
    return ele
})

console.log(mapMet) // [  1, 2, 3, 4,  5, 6, 7]

// filter
const filterMet = array1.filter((ele)=>ele >=4)
console.log(filterMet) // [ 4, 5, 6, 7 ]

// find
const findMet = array1.find((ele)=>ele===4)
console.log(findMet)// 