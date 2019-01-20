/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    for (var i = 0; i < prices.length; i++){
        for (var j = prices.length - 1; j > i; j--){
            if (prices[j] - prices[i] > max){
                max = prices[j] - prices[i];
            }
        }
    }
    return max;
};