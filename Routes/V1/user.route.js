//this is user route
const express = require("express");
const userController = require("../../Controllers/user.controller");
const verifyToken = require("../../middleware/tokenVerification");
const authorization = require("../../middleware/authorization");

const router = express.Router();

router.post("/", userController.signup).get("/", userController.getUsers);

router
  .get("/login", verifyToken, userController.getMe)
  .post("/login", userController.login);

router
  .route("/:id")
  .get(verifyToken, userController.getUser)
  .put(verifyToken, userController.updateUser)
  .delete(verifyToken, authorization("admin"), userController.deleteUser);

module.exports = router;
