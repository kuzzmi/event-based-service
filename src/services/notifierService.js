const PubSub = require("pubsub-js");

const { COMMAND_SEND_EMAIL, COMMAND_SEND_SMS } = require("../topics");

class Notification {
  constructor() {
    PubSub.subscribe(COMMAND_SEND_EMAIL, (msg, data) => {
      console.log("I'd send an email about", data);
    });
    PubSub.subscribe(COMMAND_SEND_SMS, (msg, data) => {
      console.log("I'd send an SMS about", data);
    });
  }
}

module.exports = Notification;
