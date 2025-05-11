function calculateTotalSalesWithTax(arr, tax) {
  let totalSales = 0;
  arr.forEach((item) => {
    totalSales += item.price * item.quantity;
  });

  const totalSalesWithTax = totalSales + (totalSales * tax) / 100;
  return parseFloat(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
