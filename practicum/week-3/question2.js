
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
        var counter = 0
        var maxs = -Infinity
        for (let i = 0; i < input.length;i++){
                for (let j = 0; j < input.length;j++){
                        var sums = 0;
                        for (let k = i; k <= j; k++){
                                sums+= input[k];
                        }
                        if (sums > maxs){
                                maxs = sums;
                        }
                }

        }
        return maxs;
};
           