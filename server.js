const express = require("express");

const port = 3000;

const app = express();
app.use(express.static("static"));

app.listen(port, function () {
    console.log("App started on port " + port);
});