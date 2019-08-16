/**
 * @param {string} s
 * @return {boolean}
 */
 /*
 * use regular expression to modify the string and then compare the reversed version with the original one.
 * honestly... i still don't quite understand regular expression lol.
 */
var isPalindrome = function(s) {
    if (!s) return true;
    let origin = s.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase();
    let reversed = origin.split("").reverse().join("");
    if (reversed === origin) return true;
    else return false;
};