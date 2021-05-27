// Написать функцию палиндром()


const isPalindrome = str => str.split('').reverse().join('');

console.log(isPalindrome('test'))

// Написать функцию поиска самого короткого слова
const findShort = (str) => {
    return str
        .split(' ')
        .sort((a, b) => a.length - b.length)[0]
}

console.log(findShort('The Smallest word in sentence'))

// Написать функцию создания инициалов
// const tolnitials = (str) => {
//     let name =  str.split(' ')
//     let name1 = name[0].charAt(0).toUpperCase()
//     let name2 = name[1].charAt(0).toUpperCase()
//     let name3 = `${name1}.${name2}`
//     return name3
// }

const tolnitials = (str) => {
    return str
        .split(' ')
        .map(el => el.toUpperCase().slice(0, 1))
        .join('.')
}

console.log(tolnitials('bill gates'))

//Написать функцию суммирования всех цифр числа

const sumDigits = (num) => {
    return Math.abs(num)
        .toString()
        .split('')
        .reduce((a, acc) => +a + +acc,)

}

console.log(sumDigits(-32676))