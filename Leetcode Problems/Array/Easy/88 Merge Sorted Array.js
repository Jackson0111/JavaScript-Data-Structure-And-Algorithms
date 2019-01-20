/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var currentSortedIndex = 0;
    var currentLength = m;
    while (currentSortedIndex < m + n){
        if (nums2[0] < nums1[currentSortedIndex]){
            nums1.splice(currentSortedIndex, 0, nums2[0]);
            nums1.splice(-1, 1);
            nums2.splice(0, 1);
            currentSortedIndex++;
            currentLength++;
            continue;
        }else if (currentLength == currentSortedIndex){
            nums1.splice(currentSortedIndex, 1, nums2[0]);
            nums2.splice(0, 1);
            currentSortedIndex++;
            currentLength++;
            continue;
        }
        currentSortedIndex++;
    }
};