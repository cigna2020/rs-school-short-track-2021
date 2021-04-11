/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some newArrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {newArray<newArray>} matrix
 * @return {newArray<newArray>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    newArr.push([]);
    for (let y = 0; y < matrix[i].length; y++) {
      let counter = 0;
      const fieldX = i - 1;
      const fieldY = y - 1;
      const fieldX1 = i + 1;
      const fieldY1 = y + 1;

      if (matrix[fieldX] && matrix[fieldX][fieldY]) {
        counter++;
      }
      if (matrix[fieldX] && matrix[fieldX][y]) {
        counter++;
      }
      if (matrix[fieldX] && matrix[fieldX][fieldY1]) {
        counter++;
      }
      if (matrix[i][fieldY]) {
        counter++;
      }
      if (matrix[i][fieldY1]) {
        counter++;
      }
      if (matrix[fieldX1] && matrix[fieldX1][fieldY]) {
        counter++;
      }
      if (matrix[fieldX1] && matrix[fieldX1][y]) {
        counter++;
      }
      if (matrix[fieldX1] && matrix[fieldX1][fieldY1]) {
        counter++;
      }
      newArr[i].push(counter);
    }
  }
  return newArr;
}

// const matrix = [[true, false, false], [false, true, false], [false, false, false]];
// test = minesweeper(matrix);
// console.log(test);

module.exports = minesweeper;
