function countVowels(string) {
    const vowels = ['a','i', 'u', 'e', 'o'];
    let count = 0;
    for (let v = 0; v < vowels.length; v++) {
       for (let i = 0; i < string.length; i++) {
            if(string[i].toLowerCase() === vowels[v]){
                 count+=1;
           };
       }  
    };
    return count;
}

module.exports = countVowels;
