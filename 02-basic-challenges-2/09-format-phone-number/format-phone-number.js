function formatPhoneNumber(arr) {
  const areaCode = arr.slice(0, 3).join('');
  const prefix = arr.slice(3, 6).join('');
  const lineNumbers = arr.slice(6).join('');

  return `(${areaCode}) ${prefix}-${lineNumbers}`;
}

module.exports = formatPhoneNumber;
