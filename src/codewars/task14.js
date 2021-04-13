// Trolls are attacking your comment section!
//
//     A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//     Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
        return str.replace(/[aeiouAEIOU]/g, "");


    // const arr = str.split('').filter(l =>'aeiouAEIOU'.includes(l)).join('')
    // const arr1 = arr.filter(l =>'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ.,?! '.includes(l))
    // const arr2= arr1.join('')


    //filter(l =>'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ.,?!'.includes(l))
    // filter(l=>'aeiouAEIOU'.includes(l))


}

console.log(disemvowel('This website is for losers LOL!'))