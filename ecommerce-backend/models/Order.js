const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },

            quantity: Number
        }
    ],

    totalPrice: {
        type: Number
    },

    status: {
        type: String,
        default: "Pending"
    }

},
{
    timestamps: true
});

module.exports =
mongoose.model(
    "Order",
    orderSchema
);