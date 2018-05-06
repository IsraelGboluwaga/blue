const express = require('express');
const path = require('path');

const app = express();

// // view engine setup
app.set("view options", {layout: false});
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

// app.listen(9900);

module.exports = app;