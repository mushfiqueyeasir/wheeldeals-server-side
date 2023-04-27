const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.static(__dirname + "/public/"));
//middleware
app.use(cors());
app.use(express.json());

//route
const userRoute = require("./Routes/V1/user.route");
const productRoute = require("./Routes/V1/product.route");
const cartRoute = require("./Routes/V1/cart.route");
const orderRoute = require("./Routes/V1/order.route");
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/order", cartRoute);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the database</h1>
  
  <a class="link-style" rel="stylesheet" type="text/css" href="index.html">Home</a>
  `);
});

module.exports = app;
