const express = require('express');
const router = express.Router();
const { userLoginHandler, userSignUpHandler} = require("../controller/auth");



// POST signup route   
router.post('/signup', userSignUpHandler);
// POST login route
router.post('/login', userLoginHandler);

module.exports = router;