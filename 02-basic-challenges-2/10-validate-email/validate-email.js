function validateEmail(email) {
  const arr = email.split('');
  const charSet = new Set(arr);
    if (charSet.has('@') && charSet.has('.')) {
      return true;
    }
  return false;
}

module.exports = validateEmail;
