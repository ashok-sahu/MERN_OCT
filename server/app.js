const express = require("express");
const cors = require("cors");
const compression = require("compression");
const app = express();

const routes = require('./routes/index')

//all middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.options("*", cors());
// app.use(morgan('dev'))
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use(compression());

//all routes
app.use(routes)

module.exports = app;
