/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/** 
 * Store {element : index} in a map and check whether element in the array already exists in the map.
 * If it does, simply check the position difference.
 * Note that I used i + 1 to indicate index in the map because the index could be 0 which means null in js, and the first if statment wouldn't work if the index is 0.
*/
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++){
      if (map[nums[i]]){
          if ((i + 1) - map[nums[i]] <= k) return true;
      }
      map[nums[i]] = i + 1;
  }
  return false;
};