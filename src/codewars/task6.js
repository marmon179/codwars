// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

function abbrevName(name){
   const arr = name.split(' ')
    return arr[0].toUpperCase().charAt(0) + '.' + arr[1].toUpperCase().charAt(0)
}

abbrevName('Alex Lapko')