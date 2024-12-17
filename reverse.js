// function reverse(str){
//     let reversed = '';

//     for(let char of str){
//         console.log(char)
//         reversed = char + reversed;
//     }

//     return reversed;
// }

// console.log(reverse('CodingMoney'))

// function reverse(str){
//    const strToArray = str.split('');

//    strToArray.reverse();

//    console.log(strToArray.reverse());

//    return strToArray.join('');
// }

function reverse(str){
   return str.split('').reverse().join('');
}

console.log(reverse('CodingMoney'))
