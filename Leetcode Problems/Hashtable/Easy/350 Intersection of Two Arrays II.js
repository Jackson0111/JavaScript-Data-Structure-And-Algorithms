/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //Store the frequency of each number from nums1 and loop through nums2 to check if the current number in nums2 exists in the map. If so, we add that number to result array and reduce the frequency of that number in the map until we reach the end of nums2.
    let map = {};
    let res = [];
    for(i = 0; i < nums1.length; i++){
        if(map[nums1[i]] != null) ++map[nums1[i]];
        else map[nums1[i]] = 1;
    }
    nums2.forEach((num) => {
        if(map[num] != null && map[num] > 0){
            res.push(num);
            map[num]--;
        }
    });
    return res;
};