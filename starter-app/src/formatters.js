function formatCurrency(amount, currency = "ILS", locale = "he-IL") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
}

module.exports = {
  formatCurrency
};
