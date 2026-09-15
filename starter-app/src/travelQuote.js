const BASE_DAILY_RATE = 10;

const destinationMultipliers = {
  europe: 1,
  worldwide: 1.4,
};

function ageMultiplier(age) {
  if (age < 18) {
    return 0.8;
  }

  if (age >= 65) {
    return 1.5;
  }

  return 1;
}

function roundCurrency(amount) {
  return Math.round(amount * 100) / 100;
}

function calculateTravelQuote({ tripDays, travelerAges, destination, adventureSports }) {
  if (!Number.isInteger(tripDays) || tripDays < 1 || tripDays > 30) {
    throw new Error("Trip length must be between 1 and 30 days");
  }

  if (!Array.isArray(travelerAges) || travelerAges.length === 0) {
    throw new Error("At least one traveler is required");
  }

  if (travelerAges.some((age) => !Number.isInteger(age) || age < 0 || age > 100)) {
    throw new Error("Traveler age must be between 0 and 100");
  }

  const destinationMultiplier = destinationMultipliers[destination];

  if (!destinationMultiplier) {
    throw new Error("Destination must be europe or worldwide");
  }

  const travelerPremium = travelerAges.reduce(
    (total, age) => total + tripDays * BASE_DAILY_RATE * ageMultiplier(age),
    0,
  );
  const sportsMultiplier = adventureSports ? 1.25 : 1;
  const totalPremium = travelerPremium * destinationMultiplier * sportsMultiplier;

  return {
    travelerPremium: roundCurrency(travelerPremium),
    destinationMultiplier,
    sportsMultiplier,
    totalPremium: roundCurrency(totalPremium),
  };
}

module.exports = {
  calculateTravelQuote,
  ageMultiplier,
};
