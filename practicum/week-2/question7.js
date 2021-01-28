/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       var contents = [];
       var lengths = Math.round(input.length / 2);
       for (let i = 0; i < input.length;i++){
              var tup = [input[i], input[i+2]];
              contents.push(tup);
       }
       var sums = 0;
       for (let j = 0; j < lengths; j++){
              sums += Math.min(contents[j][0], contents[j][1]);
       }
       return sums;
};
