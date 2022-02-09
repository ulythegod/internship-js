//Check If N and Its Double Exist
function checkIfExist(arr) {
    var result = false;
    arr.forEach(function (value, index) {
        var m = value / 2;
        for (var i = 0; i < arr.length; i++) {
            if (i != index && arr[i] == m) {
                result = true;
                return result;
            }
        }
    });
    return result;
}
;
// let arr = [3, 1, 7, 11];
// checkIfExist(arr);
//Valid Mountain Array
function validMountainArray(arr) {
    var result = false;
    if (arr.length >= 3) {
        var n = arr.length;
        var i = 0;
        while (i + 1 < n && arr[i] < arr[i + 1]) {
            i++;
        }
        if (i == 0 || i == n - 1) {
            return result;
        }
        while (i + 1 < n && arr[i] > arr[i + 1]) {
            i++;
        }
        result = (i == (n - 1));
    }
    return result;
}
;
// let arr = [0,3,2,1];
// console.log(validMountainArray(arr));
//Replace Elements with Greatest Element on Right Side
function replaceElements(arr) {
    arr.forEach(function (value, index) {
        if (index == arr.length - 1) {
            arr[index] = -1;
        }
        else {
            var maxRight = arr[index + 1];
            for (var i = index + 1; i < arr.length; i++) {
                if (arr[i] > maxRight) {
                    maxRight = arr[i];
                }
            }
            arr[index] = maxRight;
        }
    });
    return arr;
}
;
// let arr = [57010, 40840, 69871, 14425, 70605];
// console.log(replaceElements(arr));
//Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);
            i = i - 1;
        }
    }
    result = nums.length;
    return result;
}
;
var src = 'const a = "Hello World"';
function printWindow(win) {
    console.log("title " + win.title);
    console.log("ts " + win.ts);
}
//printWindow({ title: src, ts: 123 });
//Move Zeroes
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    var lastNonZeroElem = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroElem++] = nums[i];
        }
    }
    for (var i = lastNonZeroElem; i < nums.length; i++) {
        nums[i] = 0;
    }
}
;
// let nums: number[] = [4,2,4,0,0,3,0,5,1,0];
// moveZeroes(nums);
//Sort Array By Parity
function sortArrayByParity(nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length - 1; j > 0; j--) {
            if (nums[i] % 2 !== 0 && nums[j] % 2 === 0 && j > i) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}
;
// let nums: number[] = [3,1,2,4];
// console.log(sortArrayByParity(nums));
//Remove Element
function removeElement(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}
;
var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var val = 2;
removeElement(nums, val);
