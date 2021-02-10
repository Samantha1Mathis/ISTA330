/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10, 19], [2, 11, 20], [3, 12, 21], [4, 13, 22], [5, 14, 23], [6, 15, 24], [7, 16], [8, 17], [9, 18]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var extra = 0;
    if (n >= 19){
        extra = -1;
    }
    return n % 9 + extra;
};