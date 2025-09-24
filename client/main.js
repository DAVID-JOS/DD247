import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import "./main.html";
import "./main.css";

Meteor.subscribe("wallets");

// ✅ Show all wallets in template
Template.body.helpers({
  wallets() {
    return Meteor.call("wallets.all", (err, res) => {
      if (err) console.error(err);
      Session.set("wallets", res);
    });
    return Session.get("wallets");
  },
});
