function areAllCharactersUnique(str) {
    const strSet = new Set(str);
    return strSet.size === str.length;
}

module.exports = areAllCharactersUnique;
