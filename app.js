const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/ited", function (req, res) {
  res.send("Hello ited");
});

app.listen(3000, console.log("сервер успешно запущен на 3000"));
