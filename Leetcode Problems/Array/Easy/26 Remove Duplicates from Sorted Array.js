/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++){
        if (map[nums[i]] >= 0){
            nums.splice(i, 1);
            i--;
        }else {
            map[nums[i]] = i;
        }
    }
    return nums.length;
};

/** second attempt - using two pointers i and j.
/*  use i as the slow runner and j as the fast runner
/*  increment j when two values are the same, aka we have a period of duplicates.
/*  and set the next item after i once we found two different values.
/*  finally return i + 1 as the length
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    for (var j = 1; j < nums.length; j++){
        if (nums[i] != nums[j]){
            nums[++i] = nums[j];
        }
    }
    return i +1;
};