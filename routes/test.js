const express = require("express");
const router = express.Router();  

const testController = require("../controllers/auth/test");
 
router.post('/test', testController.postTest)
router.get('/test', testController.getTest)

module.exports = router