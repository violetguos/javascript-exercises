const reverseString = function(str) {
    let new_str = '';

    // wrong but same result
    // for(let i = str.length; i--; i>=0){
    //     new_str = new_str.concat(str[i]);
    // }

    // the correct for loop
    for(let i = str.length -1 ; i>=0; i--){
        new_str = new_str.concat(str[i]);
    }
    return new_str;
}

module.exports = reverseString
