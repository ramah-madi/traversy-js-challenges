function validAnagrams(word1, word2) {
    const word1Sorted = word1.split('').sort().join('');
    const word2Sorted = word2.split('').sort().join('');

    return word1Sorted === word2Sorted;
}

module.exports = validAnagrams;
