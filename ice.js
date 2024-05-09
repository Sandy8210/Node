const iceShop = require("./iceShop");
const offer = require("./iceOffer");

const ice1 = new iceShop();
const offer1 = new offer();

ice1.on("order", (size, flavour) => {
  console.log(`your order is ICE it's flavour is  ${flavour} and size is : ${size}`);
  offer1.offer(size);
});

ice1.displayOrder();
ice1.order("larger", "choco");
ice1.displayOrder();
