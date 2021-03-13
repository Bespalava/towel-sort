module.exports = function towelSort (matrix) {
    if(matrix == undefined || matrix == null || matrix.length == 0){
      return []
    }

    return matrix.map((el, index) => {
    if (index % 2 != 0) {
        return el.reverse();
      } else {
        return el;
      }
    }).flat();
}
