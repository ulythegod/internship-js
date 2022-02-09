//Check If N and Its Double Exist
function checkIfExist(arr: number[]): boolean {
    let result = false;   

    arr.forEach(function (value, index) {
        let m = value / 2;

        for (let i = 0; i < arr.length; i++) {
            if (i != index && arr[i] == m) {
                result = true;
                return result;
            }
        }
    });    

    return result;
};

// let arr = [3, 1, 7, 11];
// checkIfExist(arr);

//Valid Mountain Array
function validMountainArray(arr: number[]): boolean {
    let result = false;

    if (arr.length >= 3) {
        let n = arr.length;
        let i = 0;
        

        while (i + 1 < n && arr[i] < arr[i+1]){
            i++;
        }

        if (i == 0 || i == n - 1) {
            return result;
        }

        while (i+1 < n && arr[i] > arr[i+1]) {
            i++;
        }

        result = (i == (n - 1));
    }

    return result;
};

// let arr = [0,3,2,1];
// console.log(validMountainArray(arr));

//Replace Elements with Greatest Element on Right Side
function replaceElements(arr: number[]): number[] {
    arr.forEach(function (value, index) {        
        if (index == arr.length - 1) {
            arr[index] = -1;
        } else {
            let maxRight = arr[index + 1];
            
            for (let i = index + 1; i < arr.length; i++) {
                if (arr[i] > maxRight) {
                    maxRight = arr[i];
                }
            }

            arr[index] = maxRight;
        }
    });

    return arr;
};

// let arr = [57010, 40840, 69871, 14425, 70605];
// console.log(replaceElements(arr));

//Remove Duplicates from Sorted Array
function removeDuplicates(nums: number[]): number {
    let result: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);

            i = i - 1;
        }
    }   

    result = nums.length;   

    return result;
};

// let nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(nums));

//from TS handbook Everyday Types section
interface WindowTest {
  title: string
}

interface WindowTest {
  ts: number
}

const src = 'const a = "Hello World"';

function printWindow(win: WindowTest) {
    console.log("title " + win.title);
    console.log("ts " + win.ts);
}
 
//printWindow({ title: src, ts: 123 });

//Move Zeroes
/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let lastNonZeroElem: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroElem++] = nums[i];
        }
    }

    for (let i = lastNonZeroElem; i < nums.length; i++) {
        nums[i] = 0;
    }    
};

// let nums: number[] = [4,2,4,0,0,3,0,5,1,0];
// moveZeroes(nums);

//Sort Array By Parity
function sortArrayByParity(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > 0; j--) {
            if (nums[i] % 2 !== 0 && nums[j] % 2 === 0 && j > i) {
                let temp: number = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums;
};

// let nums: number[] = [3,1,2,4];
// console.log(sortArrayByParity(nums));

//Remove Element
function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
    }  

    return nums.length;
};

let nums: number[] = [0,1,2,2,3,0,4,2];
let val: number = 2;

removeElement(nums, val);
