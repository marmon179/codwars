// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
// Number.prototype.plus = function (a) {
//     return this + a
// }
// Number.prototype.minus = function (b) {
//     return this - b
// }
//
// console.log( (2).plus(3).minus(1))

// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

// function  getStr() {
// 	return [].slice.call(arguments, 1).join(arguments[0]);
// }
//
// console.log(getStr('*','1','b','1c'))

// исправить код, что бы работал правильно

for (var i = 0; i < 10; i++) {
    ((i) => {
        setTimeout(function () {
            console.log(i);
        }, 100);
    })(i)
}