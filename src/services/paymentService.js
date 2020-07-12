const PubSub = require("pubsub-js");

const { COMMAND_INIT_PAYMENT, EVENT_PAYMENT_SUCCEEDED } = require("../topics");

class PaymentService {
  constructor() {
    PubSub.subscribe(COMMAND_INIT_PAYMENT, (msg, data) => {
      this.pay();
    });
  }
  pay() {
    PubSub.publish(EVENT_PAYMENT_SUCCEEDED);
    console.log("Sending payment");
  }
}

module.exports = PaymentService;
