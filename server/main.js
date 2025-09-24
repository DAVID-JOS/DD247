import { Meteor } from "meteor/meteor";
import "../imports/api/wallets.js";

// ✅ Load private keys from settings.json
const apiKey = Meteor.settings.private.MONIEPOINT_API_KEY;
const secret = Meteor.settings.private.MONIEPOINT_SECRET;

Meteor.startup(() => {
  console.log("🚀 Mine App running only on Meteor.js");
  console.log("✅ Moniepoint API Key Loaded:", !!apiKey);
});
