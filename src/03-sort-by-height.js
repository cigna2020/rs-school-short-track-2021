/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

// const arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// const arr = [4, 2, 9, 11, 2, 16];

function sortByHeight(arr) {
  let newArr = [];
  arr.forEach((el) => {
    if (el !== -1) {
      newArr.push(el);
    }
  });
  newArr = newArr.sort((a, b) => a - b);

  let counter = 0;

  const result = arr.map((el) => {
    if (el !== -1) {
      const numb = newArr[counter];
      counter++;
      return numb;
    }
    return el;
  });

  return result;
}

// const test = sortByHeight(arr);
// console.log(test);

module.exports = sortByHeight;
