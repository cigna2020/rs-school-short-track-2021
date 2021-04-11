/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const code = str[i];
    let count = 1;

    while (str[i + 1] === code) {
      count++;
      i++;
    }
    if (str.length === 1) {
      result = str;
    } else if (count === 1) {
      result += code;
    } else {
      result += count + code;
    }
  }
  return result;
}
//
// console.log(test);

module.exports = encodeLine;
