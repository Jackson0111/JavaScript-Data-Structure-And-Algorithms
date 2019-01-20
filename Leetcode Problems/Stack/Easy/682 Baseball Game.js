/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var stack = [];
    for(var operation of ops){
        switch (operation){
            case "+":
                var lastRound = stack.pop();
                var sumOfLastTwoRounds = lastRound + peek(stack);
                stack.push(lastRound);
                stack.push(sumOfLastTwoRounds);
                break;
            case "D":
                stack.push(2 * peek(stack));
                break;
            case "C":
                stack.pop();
                break;
            default:
                stack.push(parseInt(operation, 10));
        }
    }
    var sum = 0;
    for(var number of stack){
        sum += number;
    }
    return sum;
};

function peek(stack){
    return stack[stack.length - 1];
}