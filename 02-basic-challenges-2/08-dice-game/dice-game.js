function diceGameSimulation(num) {
  let sum, dice1, dice2, result;
  const diceGame = [];
  for (let i = 0; i < num; i++) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    sum = dice1 + dice2;

    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }
    diceGame[i] = { dice1, dice2, sum, result };
  }

  return diceGame;
}

module.exports = diceGameSimulation;
