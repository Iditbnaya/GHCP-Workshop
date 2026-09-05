const TAX_RATE = 0.17;

function discountRate(membership) {
  if (membership === "gold") {
    return 0.15;
  }

  if (membership === "silver") {
    return 0.08;
  }

  return 0;
}

function roundMoney(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function calculateOrder(items, membership = "standard") {
  if (!Array.isArray(items)) {
    throw new TypeError("items must be an array");
  }

  let subtotal = 0;

  for (const item of items) {
    if (!item || typeof item.name !== "string" || item.name.trim() === "") {
      throw new TypeError("each item must have a name");
    }

    if (!Number.isFinite(item.price) || item.price < 0) {
      throw new TypeError("each item must have a non-negative price");
    }

    if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
      throw new TypeError("each item must have a positive integer quantity");
    }

    subtotal += item.price * item.quantity;
  }

  const discount = subtotal * discountRate(membership);
  const discountedSubtotal = subtotal - discount;
  const tax = discountedSubtotal * TAX_RATE;
  const total = discountedSubtotal + tax;

  return {
    subtotal: roundMoney(subtotal),
    discount: roundMoney(discount),
    tax: roundMoney(tax),
    total: roundMoney(total)
  };
}

module.exports = {
  TAX_RATE,
  calculateOrder,
  discountRate,
  roundMoney
};

