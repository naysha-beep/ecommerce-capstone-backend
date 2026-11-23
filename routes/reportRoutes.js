const router =
require("express").Router();

const {
    totalRevenue,
    topProducts
}
=
require("../controllers/reportController");

router.get("/revenue", totalRevenue);

router.get("/top-products", topProducts);

module.exports = router;