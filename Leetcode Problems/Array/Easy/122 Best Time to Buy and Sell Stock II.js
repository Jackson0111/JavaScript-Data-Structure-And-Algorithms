/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var sum = 0;
    var tempIndex = 0;
    for (var i = 0; i < prices.length; i++){
        if (i + 1 < prices.length){
            if (prices[i+1] > prices[i]){
                continue;
            }else {
                sum += prices[i] - prices[tempIndex];
                tempIndex = i + 1;
            }
        }else {
            if (tempIndex != i){
                sum += prices[i] - prices[tempIndex];
            }
        }
    }
    return sum;
};