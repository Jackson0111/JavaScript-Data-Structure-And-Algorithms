/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var currentPointer = 0;
    var nextPointer = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[currentPointer] == 0){
            if (nums[nextPointer] != 0){
                nums[currentPointer] = nums[nextPointer];
                nums[nextPointer] = 0;
                currentPointer++;
            }
        }else {
            currentPointer++;
        }
        nextPointer++;
    }
    return nums;
};