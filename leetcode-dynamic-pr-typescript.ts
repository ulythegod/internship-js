//Best Time to Buy and Sell Stock
let prices: number[] = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));

function maxProfit(prices: number[]): number {
    let min: number = Math.max(...prices);  

    let maxProfitRes: number = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > maxProfitRes) {
            maxProfitRes = prices[i] - min;
        }
    }

    return maxProfitRes;
};

//Maximum Subarray
let nums3: number[] = [-2,1,-3,4,-1,2,1,-5,4];

function maxSubArray(nums: number[]): number {

};
