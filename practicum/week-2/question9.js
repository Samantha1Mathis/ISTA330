/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var result = "";
    var contents = new Array(input.length);
    for (let i = 0; i < input.length; i++){
        var switchs = shuffleIndices[i];
        contents[switchs] = input.charAt(i);
    }
    for (let j = 0; j < contents.length;j++){
        result += contents[j];
    }
    return result;
};