// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    const letter = (s) => s.charAt(0).toUpperCase() + s.slice(1)

    const accum = (s) => s
        .split('')
        .map((w,i) => letter(Array(i + 2).join(w).toLowerCase()))
        .join('-')

    return accum(s)

}


// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
console.log(accum('ZkjUlOJJjj'))