function validateEmail(email) {
  const arr = email.split('');
  const charSet = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (charSet.has('@') && charSet.has('.')) {
      return true;
    }
  }
  return false;
}

module.exports = validateEmail;
