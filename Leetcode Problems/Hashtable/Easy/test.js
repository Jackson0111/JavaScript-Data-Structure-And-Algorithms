/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let map = new Map();
  for(let letter of s.split('')){
    if (map[letter]) map[letter]++;
    else map[letter] = 1;
  }
  for(let letter of t.split('')){
      if (map[letter]--){
          if (map[letter] < 0) return letter;
      }else return letter;
  }
};