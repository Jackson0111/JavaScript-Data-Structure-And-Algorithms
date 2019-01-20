/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // We use a map to store the index values of each character. If the character exists, we change its value to -1 as a flag. 
    let map = new Map();
    let arr = s.split('');
    let index = arr.length;
    for(i = 0; i < arr.length; i++){
        if(map.has(arr[i])) map.set(arr[i], -1);
        else map.set(arr[i], i);
    }
    map.forEach((value, key) => {
        if(value != -1 && value < index) index = value;
    });
    if(index == arr.length) return -1;
    else return index;
    // A better way to do this is to store each character and its frequency in a map and simply return the one with frequency of 1
    let map = new Map();
    let arr = s.split('');
    arr.forEach((char) => {
        if(map.has(char)){
            let frequency = map.get(char);
            map.set(char, ++frequency); //make sure to de pre-increment so the value actually gets updated, othereise it will update after the map already sets the value.
        }else map.set(char, 1);
    });
    for(let [k,v] of map){
        if(v == 1) return arr.indexOf(k);
    }
    return -1;
};