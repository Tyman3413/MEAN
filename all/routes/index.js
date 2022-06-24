var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

/* Страница Молнии МакКуина */
router.get("/mcqueen", function (req, res, next) {
    res.render("hero", {
        title: "Молния МакКуин",
        picture: "images/mcqueen",
        desc: "Красный Roockie Race Car 2006",
    });
});

/* Страница Дока Хадсона */
router.get("/dochudson", function (req, res, next) {
    res.render("hero", {
        title: "Док Хадсон",
        picture: "images/dochudson",
        desc: "Темно-синий Hudson Hornet 1951",
    });
});

/* Страница Ченга Кинга */
router.get("/king", function (req, res, next) {
    res.render("hero", {
        title: "Ченг Кинг",
        picture: "images/king",
        desc: "Голубой Plymouth Superbird 1970",
    });
});

/* Страница Чико Хикса */
router.get("/chickhicks", function (req, res, next) {
    res.render("hero", {
        title: "Чико Хикс",
        picture: "images/chickhicks",
        desc: "Зеленый Shyster Cremlin 1979",
    });
});

/* Страница Салли */
router.get("/sally", function (req, res, next) {
    res.render("hero", {
        title: "Салли",
        picture: "images/sally",
        desc: "Голубой Porsche 911 Carrera 2002",
    });
});

module.exports = router;
