const express = require("express");
const controller = require("./transaction.controller")
const router = express.Router();
var verifyToken = require('../auth/auth');
router.post("/login", controller.login)
router.post("/register",controller.register)
router.get("/getTransactionById/:transactionId", controller.getTransactionById)
module.exports = router 
