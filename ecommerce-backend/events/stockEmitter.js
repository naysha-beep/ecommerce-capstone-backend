const EventEmitter = require("events");

const stockEmitter = new EventEmitter();

stockEmitter.on("stockLow", (product) => {
    console.log(`⚠ Low Stock Alert: ${product.name}`);
});

module.exports = stockEmitter;