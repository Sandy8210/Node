const eventEmitter = require("node:events");

class iceShop extends eventEmitter {
  constructor() {
    super();
    this.orderNo = 0;
  }
  order(size, flavour) {
    this.orderNo++;
    this.emit("order", size, flavour);
  }
  displayOrder() {
    console.log(`currently order no : ${this.orderNo}`);
  }
}

module.exports = iceShop;
