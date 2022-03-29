const express = require("express");
const router = express.Router();  

const authController = require("../controllers/auth/auth");
 
router.post('/login',authController.login)
router.get('/login ', authController.signIn)

module.exports = router