function palindrome(str){
    const reversed = str.split('').reverse().join('');

    // if(str === reversed){
    //     return true;
    // }

    return str === reversed;
}

console.log(palindrome('kayak'));