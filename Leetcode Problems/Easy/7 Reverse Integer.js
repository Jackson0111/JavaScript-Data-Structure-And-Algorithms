/**
 * @param {number} x
 * @return {number}
 * Given a 32-bit signed integer, reverse digits of an integer.
 */
var reverse = function(x) {
    let abs = Math.abs(x);
    // use toString(2) to convert to binary value so that we can see if the number is more than 32 bits.
    // if it is, we return 0 as the condition is not met.
    if (abs.toString(2).length > 31) return 0;
    let reversedArr = abs.toString().split("").reverse()
    // same thing here:
    if (Number(reversedArr.join("")).toString(2).length > 31) return 0;
    let reversedNumber = Number(reversedArr.join(""));
    // finnally, we see if the original number is positive or negative to decide the sign for the reversed number.
    return x >= 0 ? reversedNumber : -reversedNumber;
};