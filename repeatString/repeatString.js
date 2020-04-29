const repeatString = function(str, n) {
    if (n==0)
        return('');
    if(n<0)
        return 'ERROR';

    let str_res = str;
    // start from 1 on purpose
    for (let i =1; i<n; i++){
        str_res = str_res.concat(str);
    }
    console.log(str_res);
    return str_res;
}

module.exports = repeatString
