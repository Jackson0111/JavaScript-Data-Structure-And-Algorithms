/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var triangle = [];
    for (var i = 0; i < numRows; i++){
        triangle[i] = new Array();
        for (var j = 0; j < i + 1; j++){
            if (triangle[i].length == 0 || triangle[i].length == triangle[i - 1].length){
                triangle[i].push(1);
            }else {
                triangle[i].push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
    }
    return triangle;
};