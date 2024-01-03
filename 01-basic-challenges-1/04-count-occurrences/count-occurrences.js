function countOccurrences(string, char) {
      let count = 0;
      for(let i=0; i<string.length; i++){
         if(string[i].toLowerCase() === char.toLowerCase()){
            count += 1;
         }
      }
      return count;
   
   // A second solution. 
   // return string.split(char).length - 1;
   
}

module.exports = countOccurrences;
