const router = require("express").Router();
const {
  registerUser,
  activationController,
} = require("../../controllers/Auth.controller");
const { validSign } = require("../../helpers/valid");

router
  .post("/register", validSign, registerUser)
  .post("/activation", activationController)
  .post("/login")

module.exports = router;
