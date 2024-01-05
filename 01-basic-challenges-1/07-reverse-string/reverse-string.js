function reverseString(string) {
    let reversedSentence = ""
    for (let i = string.length -1;  0 <= i; i--) {
        reversedSentence += string[i]    
    }
    return reversedSentence
}

module.exports = reverseString;
