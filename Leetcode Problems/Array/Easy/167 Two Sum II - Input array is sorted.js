/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 **/

 /** 
  * My solution is pretty simple. Just use a map to store values and then check if the the difference exists in the map.
  */
var twoSum = function(numbers, target) {
  let map = new Map();
  let res = [];
  for(let i = 0; i < numbers.length; i++){
      if (map[target - numbers[i]]){
          res.push(map[target - numbers[i]]);
          res.push(i + 1);
          if (map.size === 2) break;
      }else{
          map[numbers[i]] = i + 1;
      }
  }
  return res;
};