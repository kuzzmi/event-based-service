const PubSub = require("pubsub-js");

const {
  EVENT_OBJECT_INSERTED,
  EVENT_OBJECT_UPDATED,
  EVENT_OBJECT_DELETED
} = require("../topics");

class Repository {
  constructor(storage) {
    this.storage = storage;
  }

  get(id) {
    return this.storage.objects.findById(id);
  }

  insert(obj) {
    this.storage.objects.insert(obj);
    PubSub.publish(EVENT_OBJECT_INSERTED, obj);
  }

  update(obj) {
    this.storage.objects.update(obj);
    PubSub.publish(EVENT_OBJECT_UPDATED, obj);
  }

  delete(id) {
    this.storage.objects.delete(id);
    PubSub.publish(EVENT_OBJECT_DELETED, id);
  }
}

module.exports = Repository;
