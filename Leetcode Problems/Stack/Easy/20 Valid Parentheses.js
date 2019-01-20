/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = Array.from(s);
    if(arr.length == 1) return false;
    var stack = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == ")"){
            if(peek(stack) == "(") stack.pop();
            else return false;
        }else if(arr[i] == "]"){
            if(peek(stack) == "[") stack.pop();
            else return false;
        }else if(arr[i] == "}"){
            if(peek(stack) == "{") stack.pop();
            else return false;
        }else {
            stack.push(arr[i]);
        }
    } 
    return (isEmpty(stack) ? true : false);
};

function peek(stack){
    return stack[stack.length - 1];
}

function isEmpty(stack){
    return (stack.length == 0 ? true : false);
}