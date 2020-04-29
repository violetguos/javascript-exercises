const removeFromArray = function() {
    let arr=arguments[0];
    for(let i = 1; i<arguments.length; i++){
        if (arr.includes(arguments[i])){
            arr.splice(arr.indexOf(arguments[i]), 1 );
        }
    }
    return arr;
}

module.exports = removeFromArray
