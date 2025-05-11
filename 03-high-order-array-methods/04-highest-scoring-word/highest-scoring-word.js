function highestScoringWord(sentence) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    const words = sentence.toLowerCase().split(' ');
    const letters = words.map(word => {
        return word.split('');
    });

    const scores = letters.map(word => {
         return word.reduce((acc, letter) => {
            return acc + (alphabet.indexOf(letter) + 1);
        }, 0);
    });

    const maxScore = Math.max(...scores);
    const maxIndex = scores.indexOf(maxScore);
    return words[maxIndex];
}

module.exports = highestScoringWord;
