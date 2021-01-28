/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var lengthOfArray = input.length;
    var middle = lengthOfArray / 2;
    middle = Math.round(middle);
    if (lengthOfArray % 2 == 0){
        var one = input[middle - 1];
        var two = input[middle];
        var total = (one + two)/2;
    }
    if (lengthOfArray % 2 != 0){
        var total = input[middle];
    }
    return total;
};