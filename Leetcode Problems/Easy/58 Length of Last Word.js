/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // the string trim() function removes white spaces on both ends of the string.
  // we then split the string using white spaces, puting each word as an element into an array.
  // the length of the last word can be found using the array.
    let words  = s.trim().split(" ");
    return words[words.length - 1].length;
};