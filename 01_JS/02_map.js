const numbers = [1,2,3,4,5]

// 1 
const doubleEle = function(number){
    return number ** 2
}
const newArr = numbers.map(doubleEle)
console.log(newArr)

// 2. 
const newArr = numbers.map(function(number){
    return number ** 2
})

// 3.
const newArr = numbers.map((number) => number**2)
console.log(newArr)