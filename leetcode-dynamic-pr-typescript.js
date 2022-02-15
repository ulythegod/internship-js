//Best Time to Buy and Sell Stock
let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));
function maxProfit(prices) {
    let min = Math.max(...prices);
    let maxProfitRes = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        else if (prices[i] - min > maxProfitRes) {
            maxProfitRes = prices[i] - min;
        }
    }
    return maxProfitRes;
}
;
//Maximum Subarray
let nums3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSubArray(nums) {
}
;
