const numbers = [1, 45, 2, 87, -9, 98, 23]
// let minValue = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minValue) {
//         minValue = numbers[i]
//     }
// }

// let minValue = Math.min(...numbers)
// console.log(minValue)

// let maxValue = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxValue) {
//         maxValue = numbers[i]
//     }
// }
// console.log(maxValue)

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1
// }
//
// console.log(factorial(5))

// function fib(n){
//     return n <=1 ? n : fib(n-1) + fib(n-2)
// }

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }
//
// console.log(fib(3))

// function sumTo(n) {
//     if (n === 1) return 1
//     return n + sumTo(n - 1)
// }
//
// console.log(sumTo(100))
// function foo (name){
//     return this.name
// }
//
// let a = { name:'Alex'}
// let b = { name: 'Alan'}
//
// console.log(foo.bind(a)())
// let currentCount = 5
//
// function makeCounter() {
//     return function () {
//         return ++currentCount
//     }
// }
//
// let result = makeCounter()
// console.log(result())

// function bubbleSort(arr) {
//     for (var i = 0, endI = arr.length - 1; i < endI; i++) {
//         for (var j = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var swap = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = swap;
//             }
//         }
//     }
//     return arr;
// }
//
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     walk() {
//         alert('I walk: ' + this.name);
//     }
//
//     eat() {
//         alert('I can eat');
//     }
// }
//
// class Rabbit extends Animal {
//     walk() {
//         super.walk();
//         alert('...and jump!');
//     }
// }
//
// var rabbit = new Rabbit('Bunny');
// rabbit.walk();
// rabbit.eat();

doItAfter(2).then(() => console.log());

function doItAfter(seconds) {
    let promise = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve();
        }, seconds * 1000);
    });
    return promise;
}