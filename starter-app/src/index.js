const { formatCurrency } = require("./formatters");
const { calculateQuote } = require("./quoteService");

function main() {
  const quote = calculateQuote({
    vehicleValue: 120000,
    coverageType: "comprehensive",
    driverAge: 22,
    claimsLast3Years: 1
  });

  console.log("Motor insurance quote");
  console.log(`Base premium: ${formatCurrency(quote.basePremium)}`);
  console.log(`Driver surcharge: ${formatCurrency(quote.driverSurcharge)}`);
  console.log(`Claims surcharge: ${formatCurrency(quote.claimsSurcharge)}`);
  console.log(`Annual premium: ${formatCurrency(quote.annualPremium)}`);
  console.log(`Monthly illustration: ${formatCurrency(quote.monthlyPremium)}`);
}

if (require.main === module) {
  main();
}

module.exports = {
  main
};
