/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++){
    	console.log(map[target - nums[i]] >= 0);
        if (map[target - nums[i]] >= 0){
            return [map[target - nums[i]], i];
        }else {
            map[nums[i]] = i;
        }
    }
};