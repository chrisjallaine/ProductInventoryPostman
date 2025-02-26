const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser); // Register a user
router.post("/login", loginUser); // Login user

module.exports = router;
