/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var stack = []; //stack will contain elements that have not found the next greater number yet. once found, the element will be popped and put into a map(number:next greater number).
    var map = {};
    var output = [];
    for(var num of nums2){
        while(stack.length != 0 && stack[stack.length - 1] < num){
            map[stack.pop()] = num;
        }
        stack.push(num);
    }
    for(var num of nums1){
        if(map[num]) output.push(map[num]);
        else output.push(-1);
    }
    return output;
};