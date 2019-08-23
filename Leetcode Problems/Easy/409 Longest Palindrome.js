/**
 * @param {string} s
 * @return {number}
 * All we need to do is to count how many times each character appears in the string
 * I use a map to store each character.
 * While looping through the string, if a character already exists in the map, I increment count by 2, then set map[character] to zero to start over.
 * If a character does not exist yet, I set map[character] to 1 and keep looping. 
 * At the end, if the count is smaller than the length of the string, I increment count by 1 because the character in the middle was not included in count.
 */
var longestPalindrome = function(s) {
    let map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++){
        if (map[s[i]] === 1) {
            map[s[i]] = 0;
            count += 2;
        }else {
            map[s[i]] = 1;
        }
    }
    if (count < s.length) count += 1;
    return count;
};