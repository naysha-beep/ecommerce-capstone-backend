const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    createOrder,
    getOrders
} = require("../controllers/orderController");

router.post("/", auth, createOrder);

router.get("/", getOrders);

module.exports = router;