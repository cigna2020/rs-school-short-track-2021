/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newN = n.toString();
  const newArr = [];
  let minN = 0;
  let result = '';
  for (let i = 0; i < newN.length; i++) {
    newArr.push(newN[i]);
    if (i === 0 || minN > +newN[i]) {
      minN = newN[i];
    }
  }
  newArr.splice(newArr.indexOf(minN), 1);
  for (let y = 0; y < newArr.length; y++) {
    result += newArr[y];
  }
  return +result;
}

// const n = 152;
// const test = deleteDigit(n);
// console.log(test);

module.exports = deleteDigit;
