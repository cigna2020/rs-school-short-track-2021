/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// const s1 = "aabcc";
// const s2 = "adcaa";

function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const newS2 = [];
  for (let i = 0; i < s2.length; i++) {
    newS2.push(s2[i]);
  }
  for (let i = 0; i < s1.length; i++) {
    if (newS2.includes(s1[i])) {
      counter++;
      newS2.splice(newS2.indexOf(s1[i]), 1);
    }
  }
  return counter;
}

// const test = getCommonCharacterCount(s1, s2);
// console.log(test);

module.exports = getCommonCharacterCount;
