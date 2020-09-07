const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  let number = 0;
  let depth = 0;
  while (matrix.some((item) => Array.isArray(item)))
    matrix = matrix.flat(depth++);
  matrix.forEach((el) => {
    if (el === '^^') {
      number++;
    }
  });
  return number;
};
