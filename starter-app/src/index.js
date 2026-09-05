const { formatCurrency } = require("./formatters");
const { calculateOrder } = require("./orderService");

function main() {
  const items = [
    { name: "Keyboard", price: 79.99, quantity: 1 },
    { name: "Mouse", price: 29.5, quantity: 2 }
  ];

  const summary = calculateOrder(items, "gold");

  console.log("Order summary");
  console.log(`Subtotal: ${formatCurrency(summary.subtotal)}`);
  console.log(`Discount: ${formatCurrency(summary.discount)}`);
  console.log(`Tax: ${formatCurrency(summary.tax)}`);
  console.log(`Total: ${formatCurrency(summary.total)}`);
}

if (require.main === module) {
  main();
}

module.exports = {
  main
};

