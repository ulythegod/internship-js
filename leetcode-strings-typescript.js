//Reverse String
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    s.reverse();
}
;
//Reverse Integer
function reverse(x) {
    var result = 0;
    var min = Math.pow(-2, 31);
    var max = Math.pow(2, 31) - 1;
    var strX = x.toString();
    var numArray = strX.split("");
    var sign = "";
    if (numArray[0] == "-") {
        sign = numArray[0];
        numArray.splice(0, 1);
    }
    numArray.reverse();
    strX = numArray.join("");
    x = parseInt(strX);
    if (sign == "-") {
        x *= -1;
    }
    if (x > min && x < max) {
        result = x;
    }
    return result;
}
;
// let x: number = 123;
// console.log(reverse(x));
//First Unique Character in a String
function firstUniqChar(s) {
    var charIndex = -1;
    var lettersSet = new Map();
    var arrayS = s.split("");
    var uniqueChar = s[0];
    for (var i = 0; i < arrayS.length; i++) {
        if (lettersSet.get(arrayS[i])) {
            var currentValue = lettersSet.get(arrayS[i]);
            console.log(arrayS[i]);
            console.log(currentValue);
        }
        else {
            lettersSet.set(arrayS[i], 1);
        }
    }
    console.log(lettersSet);
    return charIndex;
}
;
var s = "aabb";
firstUniqChar(s);
