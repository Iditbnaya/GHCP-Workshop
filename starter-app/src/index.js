const { calculateTravelQuote } = require("./travelQuote");

const sampleTrip = {
  tripDays: 7,
  travelerAges: [35, 10],
  destination: "europe",
  adventureSports: false,
};

function formatCurrency(amount) {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
  }).format(amount);
}

function main() {
  const quote = calculateTravelQuote(sampleTrip);

  console.log(`Travelers: ${sampleTrip.travelerAges.length}`);
  console.log(`Trip: ${sampleTrip.tripDays} days in ${sampleTrip.destination}`);
  console.log(`Total travel-insurance premium: ${formatCurrency(quote.totalPremium)}`);
}

main();
