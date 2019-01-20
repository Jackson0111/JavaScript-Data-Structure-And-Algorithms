/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    /** 
    * The pattern here is that when a number repeats in the results, the original number is not a happy number.
    * Therefore, we save every result into a map and check if the new result number exists.
    * If the number already exists, we return false, meaning the original number is not a happy number.
    * If the number is equal to 1, we break out of the loop and simply return true.
    * The tricky part of the while loop is how to break down each number into digits and calculate the sum. 
    * To do that, we use a variable t as in total to add up the square of every digit. 
    * Break down n by dividing 10 each time after calculation of the right most digit and repeat. This way, we are calculating that one digit every time until n becomes 0.
    **/
    let map = {};
    let t = 0;
    while(t != 1){
        t = 0;
        while(n != 0){
            t += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        if(map[t] != null) return false;
        else map[t] = 0;
        n = t;
    }
    return true;
    
    /** 
    * METHOD 2:
    * According to math calculation, if the number 4 appears in the result numbers, the original number is not a happy number.
    * We can simply follow this principle to check for 4.
    * This method is much faster than the previous one using map as we don't need extra memory.
    **/
    let t = 0
    while(t != 1 && t != 4){
        t = 0;
        while(n != 0){
            t += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        n  = t;
    }
    return n == 1;
};