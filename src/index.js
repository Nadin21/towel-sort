
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result_array = [];
    if (matrix.length) {
        let sort_array = matrix.map(function (value, index, array) {
            if (index % 2) return value.reverse();
            else return value;
        })
        result_array = sort_array.reduce((array,item)=>array.concat(item))

    }
    return result_array;
}
