const Order =
require("../models/Order");
exports.topSellingProducts =
async(req,res)=>{

const data =
await Order.aggregate([

{
$unwind:"$items"
},

{
$group:{
_id:"$items.product",

totalSold:{
$sum:"$items.quantity"
}
}
},

{
$sort:{
totalSold:-1
}
}

]);

res.json(data);
}
exports.totalRevenue =
async(req,res)=>{

const revenue =
await Order.aggregate([

{
$group:{
_id:null,

revenue:{
$sum:"$totalPrice"
}
}
}

]);

res.json(revenue);
}
exports.topProducts = async (req, res) => {

    const products = await Order.aggregate([

        {
            $unwind: "$products"
        },

        {
            $group: {

                _id: "$products.product",

                totalSold: {
                    $sum: "$products.quantity"
                }

            }
        },

        {
            $sort: {
                totalSold: -1
            }
        }

    ]);

    res.json(products);

};