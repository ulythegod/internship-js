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
// function searchInsert(nums: number[], target: number): number {
//     if (nums.includes(target)) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === target) {
//                 return i;
//             }
//         }
//     } else {        
//         if (nums[nums.length - 1] < target) {
//             return nums.length;
//         }
//         if (nums[0] > target) {
//             return 0;
//         }
//         for (let i = 0; i < nums.length; i++) {
//            if (target > nums[i] && target < nums[i + 1]) {
//                return (i + 1);
//            }          
//         }
//     }
// };
// const nums = [1,3,5,6];
// const target = 5;
// console.log(searchInsert(nums, target));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 7));
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
// console.log("Sqrt(x)");
// function mySqrt(x: number): number {
//     let root: number = 0;
//     while (root * root <= x) {
//         root++;
//     } 
//     console.log(root);
//     return root - 1;
// };
// mySqrt(9);
// console.log("Remove Duplicates from Sorted List");
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
// let valuesArray: number[] = [1, 1, 2];
// let list: ListNode | null = createList(valuesArray);
// function createList(values: number[]): ListNode | null {
//     let currentCreatedNode: ListNode | null = null;
//     if (values.length > 0) {
//         for (let i = values.length - 1; i >= 0; i--) {
//             if (i === values.length - 1) {
//                 currentCreatedNode = new ListNode(values[i], undefined);
//             } else {
//                 currentCreatedNode = new ListNode(values[i], currentCreatedNode);
//             }
//         }
//     }
//     return currentCreatedNode;
// }
// function deleteDuplicates(head: ListNode | null): ListNode | null {
//     const withoudDuplicates: number[] = [];
//     while (head) {
//         if (!withoudDuplicates.includes(head.val)) {
//             withoudDuplicates.push(head.val);            
//         }
//         head = head.next;
//     }
//     let list: ListNode | null = createList(withoudDuplicates);
//     return list;
// };
// deleteDuplicates(list);
// console.log("Binary Tree Inorder Traversal");
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }
// let tree: TreeNode | null = null;
// let arr: Array<number | null> = [1, null, 2, 3];
// tree = createTree(arr, tree, 0);
// function createTree(values: Array<number | null>, tree: TreeNode | null, i: number): TreeNode | null {
//     if (values.length > 0) {
//         if (i < values.length) {
//             let temp: TreeNode | null = null;
//             if (values[i] !== null && typeof values[i] === "number") {
//                 temp = new TreeNode(Number(values[i]));
//             }
//             if (temp) {
//                 tree = temp;
//                 tree.left = createTree(values, tree.left, 2 * i + 1);
//                 tree.right = createTree(values, tree.right, 2 * i + 2); 
//             }            
//         }
//     }
//     return tree;
// }
// function inOrder(root: TreeNode | null, result: any[]): void {
//     if (root != null) {
//         inOrder(root.left, result);       
//         result.push(root.val);       
//         inOrder(root.right, result);               
//     }
// }
// function inorderTraversal(root: TreeNode | null): number[] {
//     const result: any[] = [];
//     inOrder(root, result);  
//     return result;
// };
// inorderTraversal(tree);
// console.log("Excel Sheet Column Title");
// function convertToTitle(columnNumber: number): string {
//     let res = "";
//     const titlesMap = new Map();
//     titlesMap.set(1, "A");
//     titlesMap.set(2, "B");
//     titlesMap.set(3, "C");
//     titlesMap.set(4, "D");
//     titlesMap.set(5, "E");
//     titlesMap.set(6, "F");
//     titlesMap.set(7, "G");
//     titlesMap.set(8, "H");
//     titlesMap.set(9, "I");
//     titlesMap.set(10, "J");
//     titlesMap.set(11, "K");
//     titlesMap.set(12, "L");
//     titlesMap.set(13, "M");
//     titlesMap.set(14, "N");
//     titlesMap.set(15, "O");
//     titlesMap.set(16, "P");
//     titlesMap.set(17, "Q");
//     titlesMap.set(18, "R");
//     titlesMap.set(19, "S");
//     titlesMap.set(20, "T");
//     titlesMap.set(21, "U");
//     titlesMap.set(22, "V");
//     titlesMap.set(23, "W");
//     titlesMap.set(24, "X");
//     titlesMap.set(25, "Y");
//     titlesMap.set(26, "Z");
//     if (columnNumber <= 26) {
//         res = titlesMap.get(columnNumber);
//     } else {        
//         const lettersArr: string[] = [];
//         while (columnNumber > 0) {
//             let rem = columnNumber % 26;
//             if (rem === 0) {
//                 lettersArr.push("Z");
//                 columnNumber = Math.floor(columnNumber / 26) - 1;
//             } else {// If remainder is non-zero
//                 lettersArr.push(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
//                 columnNumber = Math.floor(columnNumber / 26);
//             }      
//         } 
//         res = lettersArr.reverse().join('');
//     }
//     return res;
// };
// convertToTitle(701);
// console.log("Majority Element");
// function majorityElement(nums: number[]): number {
//     if (nums.length > 1) {
//         const mapNums = new Map();
//         nums.forEach(num => {
//             if (mapNums.get(num)) {
//                 mapNums.set(num, mapNums.get(num) + 1);
//             } else {
//                 mapNums.set(num, 1);
//             }           
//         });
//         const numsArr = Array.from(mapNums);
//         let maxId = 0;
//         for(let i = 0; i < numsArr.length; i++) {
//             if (numsArr[maxId][1] < numsArr[i][1]) {
//                 maxId = i;
//             }
//         }
//         return numsArr[maxId][0];
//     }
//     return nums[0];
// };
// majorityElement([2,2,1,1,1,2,2]);
// console.log("Excel Sheet Column Number");
// function titleToNumber(columnTitle: string): number {
//     let result = 0;
//     for (let i = 0; i < columnTitle.length; i++)  {
//         result *= 26;
//         result += columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
//     }
//     return result;
// };
// titleToNumber("FXSHRXW");
// console.log("Happy Number");
// function isHappy(n: number): boolean {
// };
//Check If It Is a Straight Line
// function checkStraightLine(coordinates: number[][]): boolean {
//     if (coordinates.length > 2) {
//         const firstPoint = coordinates[0];
//         const secondPoint = coordinates[1];
//         const xDifference = (secondPoint[0] - firstPoint[0]);
//         const yDifference = (secondPoint[1] - firstPoint[1]);
//         for (let i = 2; i < coordinates.length; i++) {            
//             if (yDifference * (coordinates[i][0] - firstPoint[0]) != xDifference * (coordinates[i][1] - firstPoint[1])) {
//                 return false;
//             }
//         }
//     }   
//     return true;
// };
// console.log("[[0,0],[0,1],[0,-1]]", checkStraightLine([[0,0],[0,1],[0,-1]]));
//As Far from Land as Possible
//Дан массив n x n, содержащий только 0 and 1, где 0 представляет воду и 1 представляет землю, 
//найдете ячейку с водой, у которой расстояние до ближайщей земли максимизировано, 
//и верните расстояние. Если не существует земли или воды в массиве, верните -1.
//Расстояние, использованное в этой задаче - это расстояние Manhattan: 
//расстояние между двумя ячейками (x0, y0) и (x1, y1) это |x0 - x1| + |y0 - y1|.
// function maxDistance(grid: number[][]): number {
//     const visited = [...grid];
//     const direction: Array<{i: number, j: number}> = [{i: -1, j: 0}, {i: 1, j: 0}, {i: 0, j: -1}, {i: 0, j: 1}];
//     let distance = 0;
//     let landCoordinates: Array<{i: number, j: number}> = [];
//     for (let i = 0; i < grid.length; i++) {        
//         for (let j = 0; j < grid[i].length; j++) {            
//             if (grid[i][j] === 1) {
//                 landCoordinates.push({i: i, j: j});
//             }
//         }
//     }
//     while(landCoordinates.length > 0) {
//         let queueSize = landCoordinates.length;
//         while(queueSize--) {
//             let landCell = landCoordinates[0];
//             landCoordinates.splice(0, 1);
//             direction.forEach(dir => {
//                 const x = landCell.i + dir.i;
//                 const y = landCell.j + dir.j;
//                 if (x >= 0 && y >= 0 && x < grid.length && y < grid.length && visited[x][y] === 0) {
//                     visited[x][y] = 1;
//                     landCoordinates.push({i: x, j: y});
//                 }
//             });
//         }
//         distance++;
//     }
//     return (distance <= 1) ? -1 : distance - 1;
// };
// console.log("[[1,0,1],[0,0,0],[1,0,1]]", maxDistance([[1,0,1],[0,0,0],[1,0,1]]));
// console.log("[[1,0,0],[0,0,0],[0,0,0]]", maxDistance([[1,0,0],[0,0,0],[0,0,0]]));
//Minimum Swaps to Group All 1's Together II
//swap опрееделяется как две определенные позиции в массиве, значения между ними меняются.
//Замкнутый по кругу массив определяется как массив, мы предполагаем, что его первый элемент и последний элемент являются смежными.
//Дан двоичный замкнутый массив из чисел, верните минимальное кол-во свапов для того, чтобы группировать все 1 представленные в массиве в любой локации.
// function minSwaps(nums: number[]): number {
//     let minSwapsVal = 0;
//     let onesCount = 0;
//     const numsForManipulations = [...nums];
//     numsForManipulations.forEach(item => {
//         if (item === 1) {
//             onesCount++;
//         }
//     });  
//     let max = 0;
//     let count = 0;
//     if (onesCount > 0) {
//         for (let i = 0; i < numsForManipulations.length; i++) {
//             if (i < onesCount) {
//                 if (numsForManipulations[i] === 1) {
//                     count++;
//                 }                
//             } else {
//                 max = (max > count) ?  max : count;
//                 if (numsForManipulations[i - onesCount] === 1) {
//                     count--;
//                 }
//                 if (numsForManipulations[i] === 0) {
//                     count++;
//                 }
//             }
//             console.log("count", count, "max", max);  
//         }
//     }
//     console.log("onesCount", onesCount);
//     max = (max > count) ?  max : count;
//     minSwapsVal = onesCount - max;
//     return minSwapsVal;
// };
// console.log("[0,1,0,1,1,0,0]", minSwaps([0,1,0,1,1,0,0]));
// console.log("[0,1,1,1,0,0,1,1,0]", minSwaps([0,1,1,1,0,0,1,1,0]));
// console.log("[1,1,0,0,1]", minSwaps([1,1,0,0,1]));
//Longest Substring Without Repeating Characters
//Given a string s, find the length of the longest substring without repeating characters.
// function lengthOfLongestSubstring(s: string): number {
//     let res = 0;
//     const substrings = new Set<string>();
//     let j = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (!substrings.has(s[i])) {
//             substrings.add(s[i]);
//             res = Math.max(res, i - j + 1);
//         } else {
//             while (s[j] !== s[i]) {
//                 substrings.delete(s[j]);
//                 j++;
//             }
//             substrings.delete(s[j]);
//             j++;
//             substrings.add(s[i]);
//         }
//     }
//     return res;
// };
// console.log("aab", lengthOfLongestSubstring("aab"));
// console.log("bbbbb", lengthOfLongestSubstring("bbbbb"));
// console.log("pwwkew", lengthOfLongestSubstring("pwwkew"));
//Climbing Stairs
// Вы поднимаетесь по лестнице. Нужно n шагов для того, чтобы достигнуть вершины.
// Каждый раз вы можете сделать 1 или 2 шага. Как много путей у вас есть для того, чтобы достигнуть вершины?
// function climbStairs(n: number): number {
//     let res = 0;
//     const singleStep = 1;
//     const doubleStep = 2;
//     if (n === singleStep) {
//         return n;
//     }
//     if (n === doubleStep) {
//         return n;
//     }
//     const steps: Array<number> = [singleStep, doubleStep];
//     for (let i = doubleStep; i < n; i++) {
//         steps[i] = steps[i - 1] + steps[i - 2];        
//     }
//     res = steps[n - 1];
//     return res;
// };
// console.log('2: ', climbStairs(2));
// console.log('3: ', climbStairs(3));
//Pascal's Triangle
// function generate(numRows: number): number[][] {
//     const res: number[][] = [];
//     res[0] = [1];
//     for (let i = 1; i < numRows; i++) {
//         const subArray: number[] = [];
//         const subArrayLength = i + 1;
//         subArray[0] = 1;
//         subArray[subArrayLength - 1] = 1;
//         for (let j = 1; j < (subArrayLength - 1); j++) {            
//             const first = res[i - 1][j - 1] ? res[i - 1][j - 1] : 0;
//             const second = res[i - 1][j] ? res[i - 1][j] : 0;
//             subArray[j] = first + second;          
//         }
//         res[i] = subArray;
//     }
//     return res;
// };
// console.log(generate(5));
//Pascal's Triangle II
// function getRow(rowIndex: number): number[] {
//     const triangle = generate(rowIndex + 1);   
//     return triangle[rowIndex];
// };
// getRow(3);
//Happy Number
// function isHappy(n: number): boolean {
//     let res = false;
//     const numbersSet = new Set<number>();
//     while (n != 1) {
//         const arrNum = n.toString().split('');
//         let newNum = 0;
//         arrNum.forEach((num: string) => {
//             newNum += parseInt(num) * parseInt(num);
//         });
//         if (!numbersSet.has(newNum)) {
//             numbersSet.add(newNum);
//             n = newNum;
//         } else {
//             return res;
//         }
//     }
//     if (n === 1) {
//         res = true;
//     }
//     return res;
// };
// console.log("isHappy", isHappy(2));
//Power of Two
// function isPowerOfTwo(n: number): boolean {
//     let res = false;
//     while (n >= 2) {
//         n = n / 2;
//     }
//     if (n === 1) {
//         res = true;
//     }
//     return res;
// };
// console.log("1", isPowerOfTwo(1));
// console.log("16", isPowerOfTwo(16));
// console.log("3", isPowerOfTwo(3));
//Add Digits
// function addDigits(num: number): number {
//     while (num >= 10) {
//         const arrNum = num.toString().split('');
//         let newNum = 0;
//         arrNum.forEach((number: string) => {
//             newNum += parseInt(number);
//         });
//         num = newNum;        
//     }  
//     return num;
// };
// console.log("10", addDigits(10));
//Ugly Number
// function keepDividingWhenDivisible(dividend: number, divisor: number) {
//     while (dividend % divisor === 0) {
//         dividend = dividend/divisor;
//     }
//     return dividend;
// }
// function isUgly(n: number): boolean {
//     let res = false;
//     if (n > 0) {
//         n = keepDividingWhenDivisible(n, 2);        
//         n = keepDividingWhenDivisible(n, 3);
//         n = keepDividingWhenDivisible(n, 5);
//         if (n === 1) {
//             res = true;
//         }
//     }
//     return res;
// };
// console.log("6", isUgly(6));
// console.log("1", isUgly(1));
// console.log("14", isUgly(14));
//Missing Number
// function missingNumber(nums: number[]): number {
//     let res = 0;
//     for (let i = 1; i <= nums.length; i++) {
//         if (!nums.includes(i)) {
//             res = i;
//         }
//     }
//     return res;
// };
// console.log("[3,0,1]", missingNumber([3,0,1]));
// console.log("[0,1]", missingNumber([0,1]));
// console.log("[9,6,4,2,3,5,7,0,1]", missingNumber([9,6,4,2,3,5,7,0,1]));
//Word Pattern
// function wordPattern(pattern: string, s: string): boolean {
//     let res = false;
//     const stringLettersArray = s.split(' ');
//     const patternLettersIds: Array<any> = [];
//     const strLettersIds: Array<any> = [];
//     if (pattern.length !== stringLettersArray.length) {
//         return res;
//     }
//     for (let i = 0; i < pattern.length; i++) {
//         const letterIndex = patternLettersIds.findIndex(item => item.letter === pattern[i]);
//         if (letterIndex !== -1) {
//             patternLettersIds[letterIndex].letterIds.push(i);
//         } else {
//             patternLettersIds.push({
//                 letter: pattern[i],
//                 letterIds: [i]
//             });
//         }
//     }
//     for (let i = 0; i < stringLettersArray.length; i++) {
//         const letterIndex = strLettersIds.findIndex(item => item.letter === stringLettersArray[i]);
//         if (letterIndex !== -1) {
//             strLettersIds[letterIndex].letterIds.push(i);
//         } else {
//             strLettersIds.push({
//                 letter: stringLettersArray[i],
//                 letterIds: [i]
//             });
//         }        
//     }    
//     if (patternLettersIds.map(item => item.letterIds).toString() === strLettersIds.map(item => item.letterIds).toString() && patternLettersIds.length === strLettersIds.length) {
//         res = true;
//     }
//     return res;
// };
// console.log("abba dog cat cat dog", wordPattern("abba", "dog cat cat dog"));
// console.log("abba dog cat cat fish", wordPattern("abba", "dog cat cat fish"));
//console.log("ab dog dog", wordPattern("ab", "dog dog"));
//Nim Game
// function canWinNim(n: number): boolean {
//     let res = false;
//     if (n % 4 !== 0) {
//         res = true;
//     }
//     return res;
// };
// console.log("4", canWinNim(4));
// console.log("1", canWinNim(1));
// console.log("2", canWinNim(2));
//Counting Bits
// const convertToBinary = num => (num >>> 0).toString(2);
// function countBits(n: number): number[] {
//     let res: Array<number> = [];
//     for (let i = 0; i <= n; i++) {
//         const binNumbers = convertToBinary(i).split("");
//         let num = 0;
//         binNumbers.forEach(item => {
//             num += parseInt(item);
//         });       
//         res.push(num);
//     }
//     return res;
// };
// //console.log("2", countBits(2));
// console.log("5", countBits(5));
//Reverse Vowels of a String
// function reverseVowels(s: string): string {
//     const volwes = ['a', 'e', 'i', 'o', 'u'];
//     let i = 0;
//     let j = s.length;
//     const letters = s.split('');
//     while (i < j) {
//         if (volwes.includes(letters[i]?.toLowerCase()) && volwes.includes(letters[j]?.toLowerCase())) {
//             const first = letters[i];
//             letters[i] = letters[j];
//             letters[j] = first;
//             i++;
//             j--;
//         }
//         if (!volwes.includes(letters[i]?.toLowerCase())) {
//             i++;
//         }
//         if (!volwes.includes(letters[j]?.toLowerCase())) {
//             j--;
//         }
//     }
//     return letters.join('');
// };
// console.log("hello", reverseVowels("hello"));
// console.log("leetcode", reverseVowels("leetcode"));
//Intersection of Two Arrays
// function intersection(nums1: number[], nums2: number[]): number[] {
//     const nums: Array<number> = [];
//     nums2.forEach(num => {
//         if (nums1.includes(num)) {
//             nums.push(num);
//         }
//     });
//     const numsSet = new Set<number>(nums);  
//     return Array.from(numsSet);
// };
// console.log("[1,2,2,1] [2,2]", intersection([1,2,2,1], [2,2]));
//Valid perfect square
// function isPerfectSquare(num: number): boolean {
//     let res = false;
//     let i = 1;
//     let j = num;
//     while (i <= j) {
//         const mid = Math.round((i + j) / 2);        
//         const square = mid * mid;
//         if (square === num) {
//             return true;
//         } else if (square < num) {
//             i = mid + 1;
//         } else {
//             j = mid - 1;
//         }
//     }
//     return res;
// };
// console.log('16', isPerfectSquare(16));
// console.log('14', isPerfectSquare(14));
//Ransom Note
// function canConstruct(ransomNote: string, magazine: string): boolean {
//     let res = true;
//     const counter: Array<any> = [];
//     for (let i = 0; i < ransomNote.length; i++) {
//         const letterIndex = counter.findIndex(item => item.letter === ransomNote[i]);
//         if (letterIndex !== -1) {
//             ++counter[letterIndex].count;
//         } else {
//             counter.push({
//                 letter: ransomNote[i],
//                 count: 1
//             })
//         }
//     }
//     counter.forEach(countItem => {
//         const matchingLetters = magazine.split('').filter(letter => letter === countItem.letter);      
//         if (matchingLetters?.length < countItem.count || matchingLetters?.length === 0) {
//             res = false;
//             return false;
//         }       
//     })
//     return res;
// };
// console.log("aa ab", canConstruct("aa", "ab"));
// console.log("aa ab", canConstruct("aa", "ab"));
// console.log("aa aab", canConstruct("aa", "aab"));
//Find the Difference
// function findTheDifference(s: string, t: string): string {
//     const sortS = s.split('').sort();
//     const sortT = t.split('').sort();
//     for (let i = 0; i < s.length; i++) {        
//         if (sortS[i] !== sortT[i]) {
//             return sortT[i];
//         }        
//     }
//     return sortT[s.length];
// };
// console.log("abcd abcde", findTheDifference("abcd", "abcde"));
// console.log(" y", findTheDifference("", "y"));
// console.log("a aa", findTheDifference("a", "aa"));
//Assign Cookies
// function findContentChildren(g: number[], s: number[]): number {
//     s.sort();
//     g.sort();
//     let i = 0;
//     let j = 0;
//     while (i < g.length && j < s.length) {
//         if (s[j] > g[i]) {
//             i++;
//         } else {
//             j++;
//         }
//     }
//     return i;
// };
// console.log("[1,2,3] [1,1]", findContentChildren([1,2,3], [1,1]));
// console.log("[1,2] [1,2,3]", findContentChildren([1,2], [1,2,3]));
//Count Odd Numbers in an Interval Range
// function countOdds(low: number, high: number): number {
//     if (low % 2 === 0) {     
//         low++;
//     }    
//     return low > high ? 0 : Math.floor((high - low) / 2 + 1);
// };
// console.log("3 7", countOdds(3, 7));
// console.log("8 10", countOdds(8, 10));
//Average Salary Excluding the Minimum and Maximum Salary
// function average(salary: number[]): number {
//     const sortedArrWithoutMinAndMax = salary.sort((a, b) => a - b);   
//     sortedArrWithoutMinAndMax.shift();
//     sortedArrWithoutMinAndMax.pop();  
//     return sortedArrWithoutMinAndMax.reduce((acc, number) => acc + number, 0)/sortedArrWithoutMinAndMax.length;
// };
// console.log("[4000,3000,1000,2000]", average([4000,3000,1000,2000]));
//console.log("[1000,2000,3000]", average([1000,2000,3000]));
//Is Subsequence
// function isSubsequence(s: string, t: string): boolean {
//     const tArray = t.split('');
//     let subsequence = 0;
//     if (s === "") {
//         return true;
//     }
//     if (s.length > t.length) {
//         return false;
//     }
//     for (let i = 0; i < tArray.length; i++) {
//         if (tArray[i] === s[subsequence]) {            
//             subsequence++;
//         }      
//     }   
//     return subsequence === s.length;
// };
// console.log("leeeeetcode yyyyylyy", isSubsequence("leeeeetcode", "yyyyylyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyytyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyoyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyydyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"));
//Longest Palindrome
function longestPalindrome(s) {
    if (s.length === 1) {
        return s.length;
    }
    var lettersCounter = [];
    var strS = s.split('');
    var palindromeLength = 0;
    strS.forEach(function (letter) {
        var index = lettersCounter.findIndex(function (item) { return item.letter === letter; });
        if (index !== -1) {
            lettersCounter[index].count++;
        }
        else {
            lettersCounter.push({
                letter: letter,
                count: 1
            });
        }
    });
    if (lettersCounter.length === 1) {
        palindromeLength = lettersCounter[0].count;
    }
    else {
        var singleLettersCount = lettersCounter.filter(function (item) { return item.count === 1; });
        if (singleLettersCount.length > 1) {
            palindromeLength = 1;
        }
        console.log("singleLettersCount", singleLettersCount);
        lettersCounter.forEach(function (element) {
            if (element.count > 1) {
                if (element.count % 2 === 0) {
                    console.log("element", element);
                    palindromeLength += element.count;
                }
                else {
                    palindromeLength += element.count - 1;
                }
            }
        });
    }
    return palindromeLength;
}
;
console.log("abccccdd", longestPalindrome("abccccdd"));
console.log("ccc", longestPalindrome("ccc"));
