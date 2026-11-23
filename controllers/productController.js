const Product = require("../models/Product");

// CREATE


// GET ALL

exports.getProducts = async (req, res) => {

    const products =
        await Product.find();

    res.json(products);

};

// GET BY ID

exports.getProduct = async (req, res) => {

    const product =
        await Product.findById(
            req.params.id
        );

    res.json(product);

};

// UPDATE

exports.createProduct = async (req, res) => {

    try {

        const product = await Product.create({

            ...req.body,

            seller: req.user.id

        });

        res.status(201).json(product);

    }

    catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};
exports.updateProduct = async (req, res) => {

    try {

        const product =
            await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true
                }
            );

        res.json(product);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};
// DELETE

exports.deleteProduct = async (req, res) => {

    await Product.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: "Deleted Successfully"
    });

};