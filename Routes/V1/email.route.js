//this is Cart route
const express = require("express");
const emailController = require("../../Controllers/email.controller");
const verifyToken = require("../../middleware/tokenVerification");
const { emailViewed } = require("../../middleware/viewCount");

const router = express.Router();

router
  .route("/")
  .get(emailController.getAllEmail)
  .post(emailController.saveEmail);

router
  .route("/:id")
  .get(verifyToken, emailViewed, emailController.getEmailById)
  .put(verifyToken, emailController.updateEmail)
  .delete(verifyToken, emailController.emailDelete);

module.exports = router;
