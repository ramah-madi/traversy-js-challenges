function arrayIntersection(arr1, arr2) {
  //Solution 1
  // const intersectedArr = []
  // for(let i = 0; i < arr1.length; i++) {

  //     if (arr2.includes(arr1[i]) && !intersectedArr.includes(arr1[i])) {
  //       intersectedArr.push(arr1[i])
  //     }; 
  // };
 
  // return intersectedArr;

  // Solution 2
     const set1 = new Set(arr1);
     const intersectedArr = [];

     for(let num of arr2) {
      if(set1.has(num)){
        intersectedArr.push(num);
      };
     };
     
     return intersectedArr;
}

module.exports = arrayIntersection;
