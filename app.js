var express = require("express"); /* Подключаем модуль Express */
var app = express(); /* Инициализация приложения */

/* Обработка рутового маршрута браузера */
app.get("/", function (req, res) {
    res.send("Серверная информация для браузера");
});

/* Запускаем Node.js сервер на порту 3000 */
app.listen("3000");
