const express = require("express");
const router = express.Router();

const Repo = require("./repos/objects");

const createRouter = storage => {
  const objects = new Repo(storage);
  router.get("/1", (req, res) => {
    res.json(objects.get(1));
  });
  router.post("/", (req, res) => {
    objects.insert({
      id: 1,
      status: "new"
    });
    res.json(objects.get(1));
  });
  router.patch("/1", (req, res) => {
    objects.update({
      id: 1,
      status: "updated"
    });
    res.json(objects.get(1));
  });
  router.delete("/1", (req, res) => {
    objects.delete(1);
    res.send("OK");
  });

  return router;
};

module.exports = createRouter;
