const router = require("express").Router();
const UserController = require("../../controllers/User.controller");

router
  .get("/list", UserController.allusers)
  .get("/", UserController.getUser)
  .put("/", UserController.updateUser);

module.exports = router;
