//Pow(x, n)
// function myPow(x: number, n: number): number {
//     let res: number = 0;

//     if (n === 0) {
//         res = 1;

//         return res;
//     } else if (n > 0) {
//         res = x * myPow(x, n - 1);

//         return res;
//     } else {
//         let nForPow: number = n * (-1);
//         let resForPow: number = x * myPow(x, nForPow - 1);

//         res = 1/resForPow;

//         return res;
//     }
// };

// console.log(myPow(2, 10));
// console.log(myPow(2.10000, 3));
// console.log(myPow(2, -2));
//console.log(myPow(2, 0));

//isPowerOfFour
// function isPowerOfFour(n: number): boolean {
//     if (n === 0) {
//         return false;
//     } else if (n === 1) {
//         return true;
//     } else if (n % 4 === 0) {
//         return isPowerOfFour(n/4);
//     } else {
//         return false;
//     }   
// };

// console.log(isPowerOfFour(16));
// console.log(isPowerOfFour(5));
// console.log(isPowerOfFour(1));

class ListNode1 {
    val: number
    next: ListNode1 | null
    constructor(val?: number, next?: ListNode1 | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function createList1(values: number[]): ListNode1 | null {
    let currentCreatedNode: ListNode1 | null = null;

    if (values.length > 0) {
        for (let i = values.length - 1; i >= 0; i--) {
            if (i === values.length - 1) {
                currentCreatedNode = new ListNode1(values[i], undefined);
            } else {
                currentCreatedNode = new ListNode1(values[i], currentCreatedNode);
            }
        }
    }

    return currentCreatedNode;
}

//addTwoNumbers
function addTwoNumbers1(l1: ListNode1 | null, l2: ListNode1 | null): ListNode1 | null {
    let sumsList: ListNode1 | null = createSummsList(l1, l2);

    let values: number[] = [];
    let res: ListNode1 | null = null;

    if (sumsList !== null) {
        console.log("sumsList", sumsList);
        
        let i = 1;
        while(sumsList) {
            values.push(sumsList.val * i);
            i *= 10;
            sumsList = sumsList.next;        
        }

        console.log("values", values);

        let resNum: number = 0;
        for (let i = 0; i < values.length; i++) {
            resNum += values[i];        
        }

        let resNumArr: number[] = resNum.toString().split('').map(int => parseInt(int)).reverse();

        res = createList1(resNumArr);
    }       

    return res;
};

function createSummsList(l1: ListNode1 | null, l2: ListNode1 | null): ListNode1 | null {
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 !== null && l2 === null) {
        let newNode: ListNode1 = new ListNode1(l1.val, createSummsList(l1.next, null));

        return newNode;
    } else if (l1 === null && l2 !== null) {
        let newNode: ListNode1 = new ListNode1(l2.val, createSummsList(null, l2.next));

        return newNode;
    } else if (l1 !== null && l2 !== null) {
        let newNode: ListNode1 = new ListNode1(l1.val + l2.val, createSummsList(l1.next, l2.next));

        return newNode;
    }
}

let l1Arr1: number[] = [9,9,9,9,9,9,9];
let l2Arr2: number[] = [9,9,9,9];

let l1Arr3: number[] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let l2Arr4: number[] = [5,6,4];

let l11 = createList1(l1Arr1);
let l22 = createList1(l2Arr2);

let l13 = createList1(l1Arr3);
let l24 = createList1(l2Arr4);

// console.log(addTwoNumbers1(l11, l22));
// console.log(addTwoNumbers1(null, null));
console.log(addTwoNumbers1(l13, l24));
