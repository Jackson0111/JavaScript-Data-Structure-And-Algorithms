/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let stringArr = str.split(' ');
  let patternArr = pattern.split('');
  if (stringArr.length !== patternArr.length) return false;
  
  let stringMap = new Map();
  let patternMap = new Map();
  for (let i = 0; i < stringArr.length; i++){
      if (stringMap[stringArr[i]] || patternMap[patternArr[i]]){
          if (stringArr[i] !== patternMap[patternArr[i]] && patternArr[i] !== stringMap[stringArr[i]]){
              return false;
          }
      }else{
          stringMap[stringArr[i]] = patternArr[i];
          patternMap[patternArr[i]] = stringArr[i];
      }
  }
  return true;
};