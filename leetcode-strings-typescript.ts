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
function firstUniqChar(s: string): number {
    let charIndex: number = -1;

    let lettersMap = new Map();
    let arrayS: string[] = s.split("");
    
    for (let i = 0; i < arrayS.length; i++) {
        if (lettersMap.get(arrayS[i])) {
            let currentValue: string = lettersMap.get(arrayS[i]);
            lettersMap.set(arrayS[i], currentValue + 1);
        }
        else {
            lettersMap.set(arrayS[i], 1);
        }
    }

    let uniqueLetters: string[] = [];
    
    lettersMap.forEach((value, index) => {
        if (value == 1) {
            uniqueLetters.push(index);
        }      
    });

    if (uniqueLetters.length > 0) {
        let uniqueLetter: string = uniqueLetters[0];
        charIndex = arrayS.indexOf(uniqueLetter);
    }

    return charIndex;
};

let s: string = "leetcode";
//console.log(firstUniqChar(s));

//Valid Anagram
function isAnagram(s: string, t: string): boolean {
    let result: boolean = false;

    let sArr: string[] = s.split("");
    let tArr: string[] = t.split("");

    sArr.sort();
    tArr.sort();

    if (sArr.join("") == tArr.join("")) {
        result = true;
    }

    return result;
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));

//Valid Palindrome
function isPalindrome(s: string): boolean {
    let result: boolean = false;
    const p: any = /[^a-zа-я0-9]+/g;

    let sArr: string[] = s.split("");

    let originalStr: string = sArr.join("").toLowerCase().replace(p, "");
    let reversedStr: string = sArr.reverse().join("").toLowerCase().replace(p, "");

    if (originalStr === reversedStr) {
        result = true;
    }    

    return result;
};

//console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(" "));

//String to Integer (atoi)
function myAtoi(s: string): number {
    let result: number = 0;
    let isSign = s.includes("-");
    
    result = +s.replace(/[^0-9]/g,"");

    if (isSign) {
        result *= -1;
    }

    return result;
};

// console.log(myAtoi("42"));
// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));

//Implement strStr()
function strStr(haystack: string, needle: string): number {
    if (needle === "") {
        return 0;
    } else {
        let hasStr: boolean = haystack.includes(needle);

        if (!hasStr) {
            return -1;
        } else {
            return haystack.indexOf(needle);
        }
    }
};

// console.log(strStr("hello", "ll"));
// console.log(strStr("aaaaa", "bba"));
// console.log(strStr("", ""));

//Longest Common Prefix
function longestCommonPrefix(strs: string[]): string {
    let result: string = "";

    

    return result;
};
