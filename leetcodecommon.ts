//Two Sum
// function twoSum(nums: number[], target: number): number[] {
//     let result: number[] = [];

import { values } from "lodash";

//     let firstId: number = 0;
//     let secondId: number = 0;
//     for (let i = 0; i < nums.length; i++) {
//         firstId = i;

//         for(let j = nums.length - 1; j >= 0; j--) {            
//             secondId = j;

//             if (nums[firstId] + nums[secondId] === target && i !== j) {
//                 result = [firstId, secondId];
//                 break;
//             }
//         }

//         if (result.length === 2) {
//             break;
//         }
//     }

//     return result;
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

//Median of Two Sorted Arrays
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     let res: number = 0;

//     let mergedArr: number[] = nums1.concat(nums2);
//     mergedArr.sort((a: number, b: number) => {
//         if (a < b) {
//             return -1;
//         }
//     });  
    
//     if (mergedArr.length % 2 !== 0) {
//         let middleIndex = Math.floor(mergedArr.length/2);
//         res = mergedArr[middleIndex];       
//     } else {
//         let firstMiddleIndex = mergedArr.length/2;

//         res = (mergedArr[firstMiddleIndex] + mergedArr[firstMiddleIndex - 1])/2;    
//     }

//     return res;
// };

// console.log(findMedianSortedArrays([1,3], [2]));
// console.log(findMedianSortedArrays([1,3], [2,7]));
// console.log(findMedianSortedArrays([3], [-2, -1]));

//Palindrome Number
// function isPalindrome(x: number): boolean {
//     let res: boolean = false; 

//     if (x.toString() === x.toString().split("").reverse().join("")) {
//         res = true;
//     }

//     return res;
// };

// console.log(isPalindrome(121));
//console.log(isPalindrome(-121));
//console.log(isPalindrome(10));

//Regular Expression Matching
// function isMatch(s: string, p: string): boolean {
//     let res: boolean = false;

//     let str: string[] = s.split("");

//     if (!str.includes(".") && !str.includes("*") && s === p) {
//         res = true;
//     } else if (!str.includes(".") && str.includes("*")) {
//         let index = str.indexOf('*');
//         str.splice(index);

//         res = true;
//         for (let i = 0; i < str.length; i++) {
//             if (p !== str[i]) {
//                 res = false;
//             }
//         }
//     }

//     return res;
// };

//Divide Two Integers
// function divide(dividend: number, divisor: number): number {
//     let result: number = 0;
//     let signDividend: number = (dividend < 0) ? -1 : 1; 
//     let signDivisor: number = (divisor < 0) ? -1 : 1;

//     dividend = Math.abs(dividend);
//     divisor = Math.abs(divisor);

//     let quotient = 0;
//     while (dividend >= divisor) { 
//         dividend -= divisor;
//         ++quotient;
//     } 

//     console.log(quotient);    

//     return result;
// };

// divide(7, -3);

//Insert positions
function searchInsert(nums: number[], target: number): number {
    if (nums.includes(target)) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                return i;
            }
        }
    } else {        
        if (nums[nums.length - 1] < target) {
            return nums.length;
        }
        
        if (nums[0] > target) {
            return 0;
        }

        for (let i = 0; i < nums.length; i++) {
           if (target > nums[i] && target < nums[i + 1]) {
               return (i + 1);
           }          
        }
    }
};

const nums = [1,3,5,6];
const target = 5;
console.log(searchInsert(nums, target));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));

//Majority Element
// console.log("majority Element");
// function majorityElement(nums: number[]): number {
//     let result: number = 0;
//     let numbersCount: Map<number, number> = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         if (numbersCount.has(nums[i])) {
//             let currentCount = numbersCount.get(nums[i]);
//             numbersCount.set(nums[i], Number(currentCount) + 1);
//         } else {
//             numbersCount.set(nums[i], 1);
//         }
//     }

//     numbersCount.forEach((value: number, key: number) => {
//         if ()
//     });    

//     return result;
// };

// majorityElement([3,2,3]);

//Longest Common Prefix
// console.log("Longest Common Prefix");
// function longestCommonPrefix(strs: string[]): string {
//     let result: string = "";

//     if (strs.length > 0) {
//         result = strs[0];
                
//         for(let i = 0; i < strs.length; i++) {
//             while (strs[i].indexOf(result) !== 0) {
//                 result = result.substring(0, (result.length - 1));
//                 if (result.length === 0) {
//                     return result;
//                 }
//             }
//         };
//     }  

//     return result;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));

// console.log("Valid Parentheses");
// function isValid(s: string): boolean {
//     let res = true;
//     const opennings: string[] = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//             opennings.push(s[i]);
//         } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
//             switch (s[i]) {
//                 case ")":
//                     if (opennings[opennings.length - 1] === "(") {
//                         opennings.splice((opennings.length - 1), 1);
//                     } else {
//                         res = false;
//                         return res;
//                     }
//                     break;            
//                 case "}":
//                     if (opennings[opennings.length - 1] === "{") {
//                         opennings.splice((opennings.length - 1), 1);
//                     } else {
//                         res = false;
//                         return res;
//                     }
//                     break;            
//                 case "]":
//                     if (opennings[opennings.length - 1] === "[") {
//                         opennings.splice((opennings.length - 1), 1);
//                     } else {
//                         res = false;
//                         return res;
//                     }
//                     break;            
//                 default:
//                     break;
//             }
//         }       
//     }

//     if (opennings.length > 0) {
//         res = false;
//         return res;
//     }

//     return res;
// };

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("{[]}"));

// console.log("Length of Last Word");
// function lengthOfLastWord(s: string): number {
//     let res: number = 0;

//     let words = s.split(' ');

//     words = words.filter(word => (word.length > 0));
    
//     res = words[words.length - 1].length;

//     return res;
// };

// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// //console.log(lengthOfLastWord("Hello World"));
// //console.log(lengthOfLastWord("luffy is still joyboy"));

// console.log("Plus One");
// function plusOne(digits: number[]): number[] {
//     const resString = String(BigInt(digits.join('')) + BigInt(1)).split('');
//     const res:number[] = [];    

//     resString.forEach(element => {        
//         res.push(Number(element))
//     });

//     return res;
// };

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
// console.log(plusOne([4,3,2,1]));
// console.log(plusOne([9]));

// console.log("Add Binary");
// function addBinary(a: string, b: string): string {
//     const res: string = ((parseInt(a, 2) + parseInt(b, 2))).toString(2);

//     return res;
// };

// console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));

console.log("Sqrt(x)");
function mySqrt(x: number): number {
    let res: number = x;
    const root = 2;

    while (res > root) {
        res = res/root;
    } 

    console.log(res);
    
    return res;
};
mySqrt(9)
