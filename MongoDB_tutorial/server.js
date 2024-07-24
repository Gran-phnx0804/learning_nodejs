const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);

mongoose
    .connect(
        "mongodb+srv://gr4n_sajitami:Phn1x_sync@cluster0.eh1pwye.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DB connection is successful."))
    .catch((err) => console.log(err));


app.listen(3000, () => {
    console.log("server running!");
});

