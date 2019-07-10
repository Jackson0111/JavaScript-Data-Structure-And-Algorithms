/**
 * @param {number} x
 * @return {boolean}
 * javascript one-liner
 */
var isPalindrome = function(x) {
  return x.toString() === x.toString().split('').reverse().join('');
};