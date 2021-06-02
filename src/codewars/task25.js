// 1)
// var n = 1;
// function f(n) {
//     n = 3;
// }
// f(n);
// console.log('--- n', n)
// 2)
// var obj = { a: 1 };
// function f1(o) {
//     o.a = 5;
// }
// f1(obj);
// console.log('--- obj', obj)
// 3)
// var obj = { a: 1 };
// function f2(o) {
//     o = { hello: 1 };
// }
// f2(obj);
// console.log('--- obj', obj)
// 4)
// 'use strict';
// const age = 10;
// const user = {
//     age: 20,
//     getAge: function () {
//         const age = 30;
//         return this.age;
//     }
// };
// console.log('--- user.getAge()', user.getAge())
// const getAge = user.getAge;
// console.log('--- getAge()', getAge())
// let getRealAge = getAge.bind(user);
// console.log('--- getRealAge()', getRealAge())
// console.log('--- getAge()', getAge())
// getRealAge = getAge.bind();
// console.log('--- getRealAge()', getRealAge())
// setTimeout(() => {
//     console.log('--- user.getAge()', user.getAge())
// }, 1000)
// 5)
// С бекенда приходит массив такого вида:
//     var arr = [
//         { name: 'width', value: 10 },
//         { name: 'height', value: 20 },
//         // ...
//     ];
// // Нужно получить объект такого вида:
// /!*
// {
//     width: 10,
//         height: 20,
// ...
// }
// *!/
// function objFromArr(arr) {
// // code here
// }
// console.log(objFromArr(arr))
// 6)
// Необходимо написать функцию создающую пространство имен.
//     На вход подается строка вида: "a.b.c.d.e",
//     на выходе ожидаем получить вложенные друг в друга объекты.
//     function namespace(str) {
// // code here
// }
// console.log(namespace('a.b.c.d.e'))
// // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"