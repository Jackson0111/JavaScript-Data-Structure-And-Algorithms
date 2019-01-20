/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Return false immediately if the length of two strings are not equal. Then we store all letters from string s into a map as {character : count} and check every letter in string t to see if they exist.
    if(s.length != t.length) return false;
    var letters = {};
    for(var letter of s.split('')){
        if(letters[letter] != null) letters[letter]++;
        else letters[letter] = 1;
    }
    for(var letter of t.split('')){
        if(letters[letter] == null) return false;
        else letters[letter]--;
        if(letters[letter] < 0) return false;
    }
    return true;
};