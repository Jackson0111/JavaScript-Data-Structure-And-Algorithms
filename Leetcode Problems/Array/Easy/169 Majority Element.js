/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var dic = {};
    var i = 0;
    var n = nums.length;
    while (i < n){
        if (!(nums[i] in dic)){
            dic[nums[i]] = 1;
        }else {
            dic[nums[i]] += 1;
        }
        i += 1;
    }
    for (var key in dic){
        if (dic[key] > n/2){
            return key;
        }
    }
};