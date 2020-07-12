const PubSub = require("pubsub-js");

const {
  EVENT_OBJECT_UPDATED,
  EVENT_PAYMENT_SUCCEEDED,
  COMMAND_SEND_EMAIL,
  COMMAND_INIT_PAYMENT
} = require("../topics");

class NotificationService {
  constructor() {
    PubSub.subscribe(EVENT_OBJECT_UPDATED, (msg, data) => {
      const email = {
        to: "user@example.com",
        text: "Updated object"
      };

      PubSub.publish(COMMAND_SEND_EMAIL, email);

      const paymentIntent = {
        amount: 1000
      };

      PubSub.publish(COMMAND_INIT_PAYMENT, paymentIntent);
    });
    PubSub.subscribe(EVENT_PAYMENT_SUCCEEDED, (msg, data) => {
      const email = {
        to: "user@example.com",
        text: "Payment completed. Thanks!"
      };

      PubSub.publish(COMMAND_SEND_EMAIL, email);
    });
  }
}

module.exports = NotificationService;
