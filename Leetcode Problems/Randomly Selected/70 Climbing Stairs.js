/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */

/**
 * If we analyze the pattern here, we will discover that this is the same as fibonacci numbers - a series of numbers in which each number is the sum of the two preceding numbers.
 * For example:
 * If there are 2 stairs, we will have 2 ways of climbing it.
 * If there are 3 stairs, we will have 3 ways of climbing it.
 * If there are 4 stairs, we will have 5 ways of climbing it.
 * If there are 5 stairs, we will have 8 ways of climbing it.
 * ... ...
 * Once we discover this pattern, it means that all we need to do is just calculate the fibonacci number of n:
 * fib(n) = fib(n - 1) + fib(n - 2).
 **/
var climbStairs = function(n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    let third = 3;
    for (let i = 3; i <= n; i++){
        third = first + second;
        first = second;
        second = third;
    }
    return second;
};