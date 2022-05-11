//Two Sum
// function twoSum(nums: number[], target: number): number[] {
//     let result: number[] = [];

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
function isMatch(s: string, p: string): boolean {
    let res: boolean = false;

    let str: string[] = s.split("");

    if (!str.includes(".") && !str.includes("*") && s === p) {
        res = true;
    } else if (!str.includes(".") && str.includes("*")) {
        let index = str.indexOf('*');
        str.splice(index);

        res = true;
        for (let i = 0; i < str.length; i++) {
            if (p !== str[i]) {
                res = false;
            }
        }
    }

    return res;
};
