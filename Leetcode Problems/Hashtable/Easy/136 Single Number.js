/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((accumulator, currentVal) => accumulator^currentVal);
};