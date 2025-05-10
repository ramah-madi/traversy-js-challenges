function sumOfEvenSquares(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  const squares = evenNumbers.map((num) => num * num);
  const sum = squares.reduce((acc, num) => acc + num, 0);
  return sum;
}

module.exports = sumOfEvenSquares;
