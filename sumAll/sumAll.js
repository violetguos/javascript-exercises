function isNumber(a){
    return typeof a == 'number'?true:false;
}

const sumAll = function(lowerBound, upperBound) {
    if(!(isNumber(lowerBound) && isNumber(upperBound)))
        return 'ERROR';
    if (lowerBound<0 | upperBound <0)
        return 'ERROR';
    else{
        if (lowerBound >upperBound){
            let temp = lowerBound;
            lowerBound = upperBound;
            upperBound = temp;
        }

        let sum = 0;
        for(let i=lowerBound; i<=upperBound; i++)
            sum += i;
        return sum;
    }
    
}

module.exports = sumAll
