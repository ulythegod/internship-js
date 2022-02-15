//Shuffle an Array
class Solution {
    nums: number[];
    startNums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
        this.startNums = [...this.nums];
    }

    reset(): number[] {
        this.nums = [...this.startNums];

        return this.startNums;
    }

    shuffle(): number[] {        
        //Brute Force
        let aux: number[] = [...this.nums];     

        for (let i = 0; i < this.nums.length; i++) {
            let removeIdx = Math.floor(Math.random() * aux.length);
            this.nums[i] = aux[removeIdx];
            aux.splice(removeIdx, 1);
        }

        return this.nums;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// let shuffleArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(shuffleArr);

// let obj1: Solution = new Solution(shuffleArr);
// console.log(obj1);

// let param_1: number[] = obj1.reset();
// console.log(param_1);

// let param_2: number[] = obj1.shuffle();
// console.log(param_2);

//Min Stack
class MinStack {
    stackArr: number[];

    constructor() {
        this.stackArr = [];
    }

    push(val: number): void {
        this.stackArr.push(val);
    }

    pop(): void {
        this.stackArr.splice(this.stackArr.length - 1, 1);
    }

    top(): number {
        return this.stackArr[this.stackArr.length - 1];
    }

    getMin(): number {
        let min: number = Math.min(...this.stackArr);

        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minSt: MinStack = new MinStack();
minSt.push(-2);
minSt.push(0);
minSt.push(-3);
console.log(minSt);
let param_4: number = minSt.getMin();
console.log(param_4);
minSt.pop();
console.log(minSt);
let param_3 = minSt.top();
console.log(param_3);
let param_5: number = minSt.getMin();
console.log(param_5);
