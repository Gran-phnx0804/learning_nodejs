const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/user.js");


app.use(express.static("public"));
//app.set("view engine", "ejs");

app.get("/", (req, res) => {
    //res.status(500).json({msg: "error"});
    res.render("index", {text: "World"});
});


app.use("/user", userRouter);


app.listen(port, () => console.log("server running!"));