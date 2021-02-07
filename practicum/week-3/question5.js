/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    var direction;
    if (input[0] > input[1]){
        direction = true;
    }else{
        direction = false;
    }
    for (let i = 0; i < input.length; i++){
        if (input[i] > input[i+1] && direction == false){
            return false;
        }else if (input[i] < input[i+1] && direction == true){
            return false;
        }
    }
    return true;
};
