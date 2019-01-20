/**
 * @param {number[]} nums
 * @return {number}
 */

 // this solution uses Kadane's algorithm.
 // at the current index, the largest sum is either the current item or the current item plus the previous max.
var maxSubArray = function(nums) {
    var previous_max = nums[0];
    var max = previous_max;
    for (var i = 1; i < nums.length; i++){
        if (nums[i] > nums[i] + previous_max){
            if (nums[i] > max){
                max = nums[i];
            }
            previous_max = nums[i];
        }else {
            if (nums[i] + previous_max > max){
                max = nums[i] + previous_max;
            }
            previous_max += nums[i];
        }
    }
    return max;
};