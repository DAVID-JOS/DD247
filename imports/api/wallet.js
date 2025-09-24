import { Meteor } from "meteor/meteor";

// ✅ In-memory wallets (no MongoDB)
const Wallets = [];

// ✅ Publish to clients
if (Meteor.isServer) {
  Meteor.publish("wallets", function () {
    return Wallets; // Just return raw array, no DB cursor
  });
}

// ✅ Methods for insert + get
Meteor.methods({
  "wallets.insert"(address, balance) {
    Wallets.push({ address, balance, createdAt: new Date() });
    return true;
  },
  "wallets.get"(address) {
    return Wallets.find(w => w.address === address);
  },
  "wallets.all"() {
    return Wallets;
  }
});

export { Wallets };
