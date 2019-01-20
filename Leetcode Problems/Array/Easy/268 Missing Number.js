/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var correctSum = (nums.length + 1) * nums.length / 2;
    var actualSum = 0;
    for (var i = 0; i < nums.length; i++){
        actualSum += nums[i]
    }
    if (correctSum == actualSum){
        if (nums[0] == 0){
            return nums[nums.length - 1] + 1;
        }else {
            return 0;
        }
    }else {
        return correctSum - actualSum;
    }
};