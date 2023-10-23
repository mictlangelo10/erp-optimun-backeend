const express = require("express");
var cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(require('./routes/index'))
module.exports = app;
