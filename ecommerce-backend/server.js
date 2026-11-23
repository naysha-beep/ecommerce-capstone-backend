require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API Working"
    });
});

app.use(
    "/api/auth",
    require("./routes/authRoutes")
);
app.use(
    "/api/products",
    require("./routes/productRoutes")
);
app.use(
    "/api/orders",
    require("./routes/orderRoutes")
);
app.use(
 "/api/reports",
 require("./routes/reportRoutes")
);

const PORT = process.env.PORT || 5000;

const http =
require("http");

const server =
http.createServer(app);

const {
    initSocket
}
=
require("./socket/socket");

initSocket(server);

server.listen(PORT, () => {
    console.log(
        `Server Running on ${PORT}`
    );
});
const auth =
require("./middleware/auth");

app.get("/profile", auth, (req, res) => {

    res.json({
        message: "Protected Route Accessed",
        user: req.user
    });

});