const express = require("express");
const router = express();

router.use(mylogger);

router.get("/",(req, res) => {
    res.send("user");
});

router.get("/info",(req, res) => {
    res.send("user information");
});

router.get("/:id", (req, res) => {
    res.send(`${req.params.id}のユーザー情報を取得しました`);
});

//ミドルウェア
function mylogger(req, res, next) {
    console.log(req.originalUrl);
    next();
};


module.exports = router;