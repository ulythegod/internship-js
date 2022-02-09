//Reverse String
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    s.reverse();
};

//Reverse Integer
function reverse(x: number): number {
    let result: number = 0;

    let min = Math.pow(-2, 31);
    let max = Math.pow(2, 31) - 1;
        
    let strX: string = x.toString();
    let numArray: string[] = strX.split("");

    let sign: string = "";
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
};

// let x: number = 123;
// console.log(reverse(x));

//First Unique Character in a String
// function firstUniqChar(s: string): number {
//     let charIndex: number = -1;



//     return charIndex;
// };

// let s: string = "aabb";
// firstUniqChar(s);

