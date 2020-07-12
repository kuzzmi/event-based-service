const express = require("express");
const app = express();
const PubSub = require("pubsub-js");

const createRouter = require("./createRouter");

const Storage = require("./storage");
const NotificationService = require("./services/notificationService");
const NotifierService = require("./services/notifierService");
const PaymentService = require("./services/paymentService");

const storage = new Storage();
const notifier = new NotifierService();
const notificationSvc = new NotificationService();
const paymentService = new PaymentService();

app.use("/obj", createRouter(storage));

app.listen(3000, () => {
  console.log("app is running");
});
