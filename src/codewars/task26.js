const numbers = [1, 44, 3, 567, -34, 100, -100]
// let max = Math.max(...numbers)
// let min = Math.min(...numbers)

// let min = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i]
//     }
// }

// let max = numbers[0]
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > max){
//         max = numbers[i]
//     }
// }
//
// console.log(max)
// console.log(min)

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1
// }
//
// console.log(factorial(5))

// let max = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }
// }
// console.log(max)

function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}

console.log(factorial(5))