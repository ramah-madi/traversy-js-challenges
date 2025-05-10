function calculateTotalSalesWithTax(arr, tax) {
  let totalSales = 0;
  arr.forEach((item) => {
    totalSales += item.price * item.quantity;
  });
  return totalSales + (totalSales * tax) / 100;
}

module.exports = calculateTotalSalesWithTax;
