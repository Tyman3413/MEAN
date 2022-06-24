var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

/* Страница Молнии МакКуина */
router.get("/mcqueen", function (req, res, next) {
    res.send("<h1>Страница Молнии МакКуина</h1>");
});

/* Страница Дока Хадсона */
router.get("/dochudson", function (req, res, next) {
    res.send("<h1>Страница Дока Хадсона</h1>");
});

/* Страница Ченга Кинга */
router.get("/king", function (req, res, next) {
    res.send("<h1>Страница Ченга Кинга</h1>");
});

/* Страница Чико Хикса */
router.get("/chickhicks", function (req, res, next) {
    res.send("<h1>Страница Чико Хикса</h1>");
});

/* Страница Салли */
router.get("/sally", function (req, res, next) {
    res.send("<h1>Страница Салли</h1>");
});

module.exports = router;
