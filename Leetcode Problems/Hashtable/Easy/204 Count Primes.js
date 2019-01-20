/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    /**
    * Sieve of Eratosthenes Algorithm
    * Assume all numbers less than n are prime numbers.
    * Find ones that are not. 
    * Starting from 2, the first prime number, we cross out all numbers that are multiples of it. For example, 4, 6, 8, 10...
    * Then we move on to the next number that's not been crossed out, aka, 3. Repeat the above step until we are done.
    * The numbers not crossed out at then end will be all the prime numbers less than n.
    **/
    let count = 0;
    let prime = new Array(n).fill(true); 
    for(let i = 2; i < n; i++){
        if(prime[i]){
            ++count;
            for(let j = i; j * i < n; j++){
                prime[j * i] = false;
            }
        }
    }
    return count;
};