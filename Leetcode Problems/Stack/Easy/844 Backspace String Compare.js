/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return calculate(S) == calculate(T) ? true : false;
};

//return calculated string S
function calculate(string){
    var stack = [];
    var letters = string.split('');
    for(var letter of letters){
        if(letter != '#'){
            stack.push(letter);
        }else if(stack.length != 0){
            stack.pop();
        } 
    }
    return stack.toString();
}