/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var length = input.length
    var map = new Map();
    for (let i = 0; i < length;i++){

        if (input[i] in map){
            map[input[i]] += 1;
        }else{
            map[input[i]] = 1;
        }
    }
    for (let key in map) {
        if (map[key] > (parseInt(length/2))){
            return key;
        }
    }
    return -1;

};