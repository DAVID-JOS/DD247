import { Meteor } from "meteor/meteor";

// ✅ Default currency symbol from settings.json
let currencySymbol = Meteor.settings.public.CURRENCY || "₦";

// ✅ Simple converter: SKD → USD / NGN
const rates = {
  USD: 1,      // base
  NGN: 1500    // example rate: 1 USD = 1500 NGN
};

function setCurrency(symbol) {
  currencySymbol = symbol;
}

function getCurrency() {
  return currencySymbol;
}

function convert(amountUSD, target = "NGN") {
  const rate = rates[target] || 1;
  return amountUSD * rate;
}

export { setCurrency, getCurrency, convert };
