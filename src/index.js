
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result_array = matrix.map(function(value,index,array){
        if(index/2) return value.reverse();
        else return value;
    })
  return result_array;
}
