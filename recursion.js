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
var ListNode1 = /** @class */ (function () {
    function ListNode1(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode1;
}());
function createList1(values) {
    var currentCreatedNode = null;
    if (values.length > 0) {
        for (var i = values.length - 1; i >= 0; i--) {
            if (i === values.length - 1) {
                currentCreatedNode = new ListNode1(values[i], undefined);
            }
            else {
                currentCreatedNode = new ListNode1(values[i], currentCreatedNode);
            }
        }
    }
    return currentCreatedNode;
}
//addTwoNumbers
function addTwoNumbers1(l1, l2) {
    var sumsList = createSummsList(l1, l2);
    var values = [];
    var res = null;
    if (sumsList !== null) {
        console.log("sumsList", sumsList);
        var i = 1;
        while (sumsList) {
            values.push(sumsList.val * i);
            i *= 10;
            sumsList = sumsList.next;
        }
        console.log("values", values);
        var resNum = 0;
        for (var i_1 = 0; i_1 < values.length; i_1++) {
            resNum += values[i_1];
        }
        var resNumArr = resNum.toString().split('').map(function (int) { return parseInt(int); }).reverse();
        res = createList1(resNumArr);
    }
    return res;
}
;
function createSummsList(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    else if (l1 !== null && l2 === null) {
        var newNode = new ListNode1(l1.val, createSummsList(l1.next, null));
        return newNode;
    }
    else if (l1 === null && l2 !== null) {
        var newNode = new ListNode1(l2.val, createSummsList(null, l2.next));
        return newNode;
    }
    else if (l1 !== null && l2 !== null) {
        var newNode = new ListNode1(l1.val + l2.val, createSummsList(l1.next, l2.next));
        return newNode;
    }
}
var l1Arr1 = [9, 9, 9, 9, 9, 9, 9];
var l2Arr2 = [9, 9, 9, 9];
var l1Arr3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
var l2Arr4 = [5, 6, 4];
var l11 = createList1(l1Arr1);
var l22 = createList1(l2Arr2);
var l13 = createList1(l1Arr3);
var l24 = createList1(l2Arr4);
// console.log(addTwoNumbers1(l11, l22));
// console.log(addTwoNumbers1(null, null));
console.log(addTwoNumbers1(l13, l24));
