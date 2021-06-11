// const names = ['tanya', 'ignat', 'dima']

// const result = names.some(n => n === 1)
// const result = names.every(n => n.length < 10)
// const result = 'adffdf alex kj ya'.indexOf('f')
//
//
// console.log(result)

// new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(1)
//     }, 0);
//     res(2)
// })
//     .then(value => alert(value))
//     .catch(value => alert(value))

// const names = ['tanya', 'ignat', 'dima']
// const a = names.reduce((total, el) => {
//     total[el] = 'hey'
//     return total
// }, {})
// console.log(a)

// const users = [
//     {name: 'dima', age: 18},
//     {name: 'ignat', age: 21},
// ]
// const user2 = users
//     .filter(u => u.age === 18)
//     .map(u => ({
//         ...u,
//         passed: true
//     }))
// console.log(user2)

// console.log('a'>'z')
// console.log('abcdz'>'abcd')
// console.log('abcdz'>'z')

// const name = ['alex','maksim','vasij']
//
// const name2 = name.some(n => n === 'alex')
// console.log(name2)
//
// const name3 = name.every( n => n.length < 2)
// console.log(name3)

// const result = 'vasij alex kolj'.indexOf('u')
// console.log(result)
// new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(1)
//     }, 0)
//     res(2)
// })
//     .then(value => alert(value))
//     .catch(value => alert(value))
// let a = {}
// let names = ['alex','alan','mM']
//
// a = names.reduce((total,el) => {
//     total[el]='hey'
//     return total
// },{})
// console.log(a)
// let a = {}
// let names = ['alex', 'alan', 'mM']
// names.forEach((el) => {
//     a[el] = 'hey'
// })
// console.log(a)

// let names = ['aa','bb','cc','dd']
// let a = names.reduce((total,el) => {
//     total[el] = 'hey'
//     return total
// },{})
// console.log(a)

// let names = ['aa', 'bb', 'cc', 'dd']
// let a = {}
// names.forEach(el => {
//     a[el] = 'total'
// })
// console.log(a)

// let users = [
//     {name: 'dima', age: 18},
//     {name: 'alex', age: 21}
// ]
// let users2 = users
//     .filter(u => u.age === 21)
//     .map(u => ({...u, passed: true}))
// console.log(users2)
//
// let state = {
//     address: {
//         streets: [
//             {name: 'shabany'},
//             {name: 'surganova'}
//         ],
//         city: {value: 'minsk'}
//     },
//     age: 'value:10'
// }
// let newState = {
//     ...state,
//     address: {
//         ...state.address.streets.map(u => {
//             if (u.name === 'shabany') return {...u, name: 'banan'};
//             else return u
//         })
//     }
// }
//
// console.log(newState)

// let man = {
//     _name: '',
//     get name() {
//         return this._name + '!'
//     },
//     set name(value) {
//         if (value === 'alex') throw new Error('classnot ima')
//         this._name = value
//     },
//     age() {
//         return 18
//     }
// }
// man.name = 'alex'
// console.log(man.name)

// for (var i = 0; i < 10; i++) {
//     ((i)=>setTimeout(() => {
//         console.log(i)
//     }, i * 1000))(i)
// }

// let a = {}
// function change(f) {
//     return f.name = 'ddd'
// }
//
// console.log(change(a))

// let a = {}
//
// function change(o) {
//     return o = {name: 'ssss'}
// }
//
// console.log(change(a))

// let a = 10;
// function yo() {
//      a = 100
// }
// yo()
// console.log(a)

// let a = {name: 'Alex'}
// let names = ['alan','pavel','toto']
// names.forEach(n => a[n] = 'hey')
// console.log(a)

// let man = {
//     name: 'Alex',
//     hello:  () => {
//         alert(this.name)
//     }
// }
// man.hello()
// (async () => {
//     let hello = new Promise((res, rej) => {
//         rej(10)
//     })
//
//     let result = await hello;
//     console.log('111', result)
// })()

// function makeCounter() {
//     let value = 0;
//     return function () {
//         return value++
//     }
// }
//
// let f = makeCounter()
//
// console.log(f())
// console.log(f())
// const man = {
//     lastName: 'Lapko'
// }
//
// function hello(firstName, age) {
//     alert(firstName + this.lastName + age)
// }
//
// const hello2 = hello.bind(man,'Alex')
// console.log(hello2(18))
// let a = { name: 'Alex'}
// a[0] = 'hey';
// a[1] = 'yo';
// a[2] = 'blabl'
// a['name'] = 'UUUU'
// a[{}] = 'yo';
// a[{name:'dfdd'}] = 'dkfjk'
// console.log(a)

// var a = 10
// function yo(a) {
//      a = 100
// }
// yo(30);
// console.log(a)

// const name = ['alex', 'max', '444']

// let name2 = name.some(n => n === 'max')
// console.log(name2)
//
// let result = name.every(u => u.length > 2)
// console.log(result)
//
// const str = 'Alex cool man'.indexOf('cool ')
// console.log(str)

// const result2 = name.reduce((total,el) =>{
//      total[el] = 'hello'
//      return total
// },{})
// const a = {}
// const result3 = name.forEach(el =>{
//      a[el] = 'Hello'
// })
//
// console.log(a)

let users = [
    {name: 'alex', age: 18},
    {name: 'max', age: 33}
]
const user = users