const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  accountActivation,
  forgotPassword,
  resetPassword,
  refreshToken,
  resendOtpEmail,
} = require("../controllers/auth");
const { onlyAdmin, protect } = require("../middleware/auth");

router.route("/register").post(register);
router.route("/verify-otp/:otp").put(accountActivation);
router.route("/resend-otp-email/:email").put(resendOtpEmail);
router.route("/login").post(login);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:resetToken").put(resetPassword);
router.route("/refreshtoken").post(refreshToken);

module.exports = router;
