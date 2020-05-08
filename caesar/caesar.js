const ASCI_Z = 90;
const ASCI_a = 97;
const ASCI_A = 65;
const ASCI_z = 122;

function shift(char, position){
    /*
    char: the character
    position: the # of shifts
    */ 
   position = position % 26;
   let newChar = char.charCodeAt() + position;
   if(newChar > ASCI_Z && char.charCodeAt() < ASCI_a){
       // the ASCII is over Z after shifting
       newChar = newChar - ASCI_Z + ASCI_A - 1;

   }
   else if(newChar > ASCI_z && char.charCodeAt() > ASCI_a){
       newChar = newChar - ASCI_z + ASCI_a - 1;
   }
   // negative shifts
   else if(newChar < ASCI_A){
       newChar = ASCI_Z - (ASCI_A - newChar) + 1; 
    }
   
   return String.fromCharCode(newChar);
}


const caesar = function(str, position) {
    let charArr = str.split("");
    let newStr = [];
    for(let c in charArr){
        let puncutation = !!charArr[c].match(/^[.,:!?\s+]/);

        if(puncutation)
            newStr.push(charArr[c]);
        else
            newStr.push(shift(charArr[c], position));
    }
    newStr = newStr.join("");
    return newStr;
}

module.exports = caesar
