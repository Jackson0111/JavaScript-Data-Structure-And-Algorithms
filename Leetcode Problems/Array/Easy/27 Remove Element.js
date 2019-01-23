/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 **/

/**
* This problem is little confusing... But we can use two pointers to solve it. 
* We will have a slow runner i and a fast runner j.
* Go through the array, when nums[j] is not equal to val, we will set nums[i] to nums[j]
* Eventually we just return i;
* This is because we basically make i move n times, where n is (nums.length - number of vals in the array).
* When we encounter val, we dont' make i move. Only make it move when the current number is not val. 
* This way eventually we only move the same amount of steps as if the array doesn't have val at all.
* Every time i needs to move, we change the value of the element i is at, aka "remove" val throughout the process.
**/
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++){
        if (nums[j] !== val){
            nums[i++] = nums[j];
        } 
    }
    return i;
};