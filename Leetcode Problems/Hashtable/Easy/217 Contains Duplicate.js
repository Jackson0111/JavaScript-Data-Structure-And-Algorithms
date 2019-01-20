/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {};
    for(var num of nums){
        if(map[num] == null) map[num] = 0;
        else return true;
    }
    return false;
};