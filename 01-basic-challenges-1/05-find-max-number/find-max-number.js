function findMaxNumber(arr) {
     let max = arr[0]
     for(let i=0; i< arr.length; i++){
         if(arr[i] > max){
            max = arr[i]
         }
     }
     return max
    
    // A second solution.
    // return Math.max(arr);
}

module.exports = findMaxNumber;
