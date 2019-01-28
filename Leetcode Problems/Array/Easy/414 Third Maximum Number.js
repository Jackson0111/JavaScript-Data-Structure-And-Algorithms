/**
 * @param {number[]} nums
 * @return {number}
 **/

/**
 * I used three variables, first second and third, to represent the three largest numbers. 
 * They all start as the smallest integer and become replaced if the conditions are met.
 * Finally, I check if third still equals the smallest integer that was set initially. 
 * If it is, that means the third largest number doesn't exist, so we return first. 
 * Otherwise, return third.
 */
 var thirdMax = function(nums) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = first;
  let third = second;
  for (let i = 0; i < nums.length; i++){
      if (nums[i] > first){
          third = second;
          second = first;
          first = nums[i];
      }else if (nums[i] > second && nums[i] < first){
          third = second;
          second = nums[i];
      }else if (nums[i] > third && nums[i] < second){
          third = nums[i];
      }
  }
  return third === Number.MIN_SAFE_INTEGER ? first : third;
};