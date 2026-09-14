const BASE_RATE = 0.03;

function coverageMultiplier(coverageType) {
  if (coverageType === "comprehensive") {
    return 1;
  }

  if (coverageType === "third_party") {
    return 0.65;
  }

  throw new TypeError("coverageType must be comprehensive or third_party");
}

function driverMultiplier(driverAge) {
  return driverAge < 24 ? 1.25 : 1;
}

function claimsMultiplier(claimsLast3Years) {
  return 1 + claimsLast3Years * 0.1;
}

function roundMoney(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function calculateQuote({
  vehicleValue,
  coverageType,
  driverAge,
  claimsLast3Years
}) {
  if (!Number.isFinite(vehicleValue) || vehicleValue <= 0) {
    throw new TypeError("vehicleValue must be a positive number");
  }

  if (!Number.isInteger(driverAge) || driverAge < 17 || driverAge > 99) {
    throw new TypeError("driverAge must be an integer from 17 to 99");
  }

  if (!Number.isInteger(claimsLast3Years) || claimsLast3Years < 0) {
    throw new TypeError("claimsLast3Years must be a non-negative integer");
  }

  const basePremium = vehicleValue * BASE_RATE;
  const coveragePremium = basePremium * coverageMultiplier(coverageType);
  const driverSurcharge =
    coveragePremium * (driverMultiplier(driverAge) - 1);
  const claimsSurcharge =
    (coveragePremium + driverSurcharge) *
    (claimsMultiplier(claimsLast3Years) - 1);
  const annualPremium =
    coveragePremium + driverSurcharge + claimsSurcharge;

  return {
    basePremium: roundMoney(basePremium),
    coveragePremium: roundMoney(coveragePremium),
    driverSurcharge: roundMoney(driverSurcharge),
    claimsSurcharge: roundMoney(claimsSurcharge),
    annualPremium: roundMoney(annualPremium),
    monthlyPremium: roundMoney(annualPremium / 12)
  };
}

module.exports = {
  BASE_RATE,
  calculateQuote,
  claimsMultiplier,
  coverageMultiplier,
  driverMultiplier,
  roundMoney
};
