class Storage {
  constructor() {
    const data = {
      objects: {}
    };

    return {
      objects: {
        findById: id => data.objects[id],
        insert: obj => {
          if (data.objects[obj.id]) {
            throw "Can not do this";
          }
          data.objects[obj.id] = obj;
        },
        update: obj => {
          data.objects[obj.id] = obj;
        },
        delete: id => {
          delete data.objects[obj.id];
        }
      }
    };
  }
}

module.exports = Storage;
