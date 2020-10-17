const morgan = require("morgan");
const path = require("path");
const express = require("express");
const cors = require('cors')
const app = require("../app");
const keys = require("./keys.config");

const { nodeENV } = keys;
const {clientURL} = keys.urls

function getAssets() {
  if (nodeENV === "production") {
    app.use(express.static(path.resolve(__dirname, "../../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
    });
  } else {
    app.use(
      cors({
        origin: clientURL,
      })
    );
    app.use(morgan("dev"));
    app.use(express.static(path.resolve(__dirname, "../../client/public")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../client/public/index.html"));
    });
  }
}

module.exports = getAssets;
