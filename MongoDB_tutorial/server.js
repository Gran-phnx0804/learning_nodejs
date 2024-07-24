const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");
const config = require("./config");

app.use(foodRouter);

mongoose
    .connect(config.url)
    .then(() => console.log("DB connection is successful."))
    .catch((err) => console.log(err));

app.listen(3000, () => {
    console.log("server running!");
});

