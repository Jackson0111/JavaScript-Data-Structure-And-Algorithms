/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Basically iterating through the string, and compare needle with the substring of Haystack if the first letter matches.
 */
var strStr = function(haystack, needle) {
    if (needle === "" || haystack === needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
          // Use substring here because we don't have to worry about array out of index issue.
          // The second param will just become the last index of the string if it is bigger than the string length.
            let temp = haystack.substring(i, i + needle.length);
            if (temp === needle) return i;
        }
    }
    return -1;
};