/**
 * @param {string[]} strs
 * @return {string}
 */
 // The idea is that whatever the most common prefix is, it cannot be
 // longer than the first word - otherwise, it's not common in all words...
 // So simply check every substring of the first word in all strings in the array
 // Then return the most common results.
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    let current = "";
    let results = "";
    let i = 0;
    while (i < strs[0].length) {
        current = strs[0].substring(0, i + 1);
        let flag = strs.every(x => {
            return x.startsWith(current);
        })
        if (flag === true) results = current;
        else break;
        i++;
    }
    return results;
};