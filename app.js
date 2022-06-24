/* // Подключаем модули */
var express = require("express");
var bodyParser = require("body-parser");

/* Инициализация приложения */
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Обработка рутового маршрута браузера */
app.get("/", function (req, res) {
    var form =
        "<!doctype html>" +
        '<html lang="ru">' +
        "<head>" +
        '<meta charset="UTF-8">' +
        "<title>Форма</title>" +
        "</head>" +
        "<body>" +
        "<h1>Форма для отправки данных на сервер</h1>" +
        '<form action="/submit_result" method="post">' +
        '<textarea name="text"></textarea><br/><br/>' +
        '<input type="submit" value="Отправить данные на сервер"/>' +
        "</form>" +
        "</body>" +
        "</html>";
    res.send(form);
});

/* Извлечения данных формы */
app.post("/submit_result", function (req, res) {
    console.log(req.body);
    var post_text = req.body.text
        ? "Вы отправили на сервер текст: " + req.body.text
        : "Вы отправили на сервер пустую строку";
    res.send(post_text);
});

/* Добавим Callback функцию */
app.listen("3000", function () {
    console.log("Сервер работает и слушает порт: 3000");
});
