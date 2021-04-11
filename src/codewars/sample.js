// function makeCounter() {
//     let count = 1
//     return function () {
//         return count++
//     }
// }
//
// const counter = makeCounter()
// console.log(counter())
// console.log(counter())
// const counter2 = makeCounter()
// console.log(counter2())
// console.log(counter())

// function makeCounter1(n) {
//     let count = n
//     return {
//         increase: ++count,
//         decrease: --count,
//         reset: function () {
//             count = 0
//             return count
//         },
//         set: (num) => {
//             count = num;
//             return count
//         }
//     }
// }
//
// let counter = makeCounter1(5)
// console.log(counter.increase)

// function sumTo(n) {
//     if (n === 1) return 1
//     return n + sumTo(n - 1)
// }
//
// console.log(sumTo(50))
//
// let sum = function sumTo1(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }
//
// console.log(sum(100))

// function factorial(n) {
//     return (n != 1) ? factorial(n - 1) * n : 1
// }
//
// console.log(factorial(5))

// function superSum(n) {
//     if (n <= 0) return 0;
//     if (n === 1) return (n) => n;
//     let _arguments = [];
//
//     function helper(...args) {
//         _arguments = [..._arguments, ...args];
//         if (_arguments.length >= n) {
//             _arguments.length = n;
//             return _arguments.reduce((acc, num) => acc + num)
//         } else {
//             return helper
//         }
//     }
//
//     return helper
// }
//
// console.log(superSum(3)(2)(5,3))
