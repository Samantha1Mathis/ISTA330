/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let triangle = [[1], [1, 1]]
  if (n == 0) {
    return [];
  }else if ( n == 1){
    return [[1]];
  }else if (n ==2){
    return triangle;
  }else{
    for (let i = 2; i < n; i++){
      addRow(triangle);
    }
  }
  return triangle
};


var addRow = function(triangle){
  let previous = triangle[triangle.length-1]
  let newRow = [1]
  for (let i = 0; i < previous.length-1;i++){
    let current = previous[i]
    let next = previous[i+1]
    newRow.push(current + next)
  }
  newRow.push(1)
  return triangle.push(newRow)
}