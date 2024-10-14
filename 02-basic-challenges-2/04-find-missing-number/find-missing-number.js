function findMissingNumber(arr) {
  const uniqueArr = Array.from(new Set(arr));
  
  if(uniqueArr.length === 0) return 1;

  const n = uniqueArr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for(let i = 0; i < uniqueArr.length; i++) {
      actualSum += uniqueArr[i];
  };
  
  return expectedSum - actualSum;
};

module.exports = findMissingNumber;
