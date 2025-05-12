function generateHashtag(str) {
    if (str.length === 0 || str.length > 140) {
        return false;
    };

    const hashedString = str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
    return `#${hashedString}`;
}

module.exports = generateHashtag;
