//Shuffle an Array
class Solution {
    constructor(nums) {
        this.nums = nums;
        this.startNums = [...this.nums];
    }
    reset() {
        this.nums = [...this.startNums];
        return this.startNums;
    }
    shuffle() {
        //Brute Force
        let aux = [...this.nums];
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
let shuffleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(shuffleArr);
let obj1 = new Solution(shuffleArr);
console.log(obj1);
let param_1 = obj1.reset();
console.log(param_1);
let param_2 = obj1.shuffle();
console.log(param_2);
