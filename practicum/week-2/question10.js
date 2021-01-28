/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var number = n;
    var smallest = Infinity;
    var largest = -Infinity;

    while (number > 0) {
        var mod = number % 10
        mod = parseInt(mod);
        number = parseInt(number / 10);
        if (mod < smallest){
            smallest = mod;
        }
        if (mod > largest){
            largest = mod;
        }
    }
    var result = largest - smallest;
    return result;

};