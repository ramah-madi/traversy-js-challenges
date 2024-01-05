function isPalindrome(string) {
  let str = string.toLowerCase().replace(/[^a-z0-9]/g, '')
  let reversd = '';
  for (let i = str.length -1; 0 <= i; i--) {
    reversd += str[i];
  }
  return reversd === str
}

module.exports = isPalindrome;
