/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sArr = s.split('');
  let tArr = t.split('');
  let map = new Map();
  
  for(let i = 0; i < sArr.length; i++){
      if (map[sArr[i]]) map[sArr[i]]++;
      else map[sArr[i]] = 1;
  }
  for(let i = 0; i < tArr.length; i++){
      if (map[tArr[i]]){
          map[tArr[i]]--;
          if (map[tArr[i]] < 0) return tArr[i];
      }else return tArr[i];
  }
};