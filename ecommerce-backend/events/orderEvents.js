const EventEmitter =
require("events");

const orderEmitter =
new EventEmitter();

orderEmitter.on(
"orderPlaced",
(order)=>{

console.log(
`Order Placed:
${order._id}`
);

}
);

module.exports =
orderEmitter;