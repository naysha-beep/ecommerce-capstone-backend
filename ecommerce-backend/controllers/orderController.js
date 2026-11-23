const Order = require("../models/Order");
const orderEmitter =
require("../events/orderEvents");
const { getIO } =
require("../socket/socket");

exports.createOrder = async (req, res) => {

    try {

        const order = await Order.create({

            customer: req.user.id,
            products: req.body.products,
            totalPrice: req.body.totalPrice

        });

        orderEmitter.emit(
            "orderPlaced",
            order
        );

        const io = getIO();

        if (io) {
            io.emit(
                "newOrder",
                order
            );
        }

        res.status(201).json(order);

    }
    catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};
exports.getOrders =
async (req,res)=>{

    const orders =
        await Order.find()
        .populate("customer")
        .populate("products.product");

    res.json(orders);


};
