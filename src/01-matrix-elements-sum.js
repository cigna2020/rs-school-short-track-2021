/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];

function getMatrixElementsSum(matrix) {
  let result = 0;
  const columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][i] === 0) {
        break;
      } else {
        result += matrix[y][i];
      }
    }
  }
  return result;
}

// const text = getMatrixElementsSum(matrix);
// console.log(text);

module.exports = getMatrixElementsSum;
