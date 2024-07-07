const express=require('express')

const jwt=require('jsonwebtoken')
const router = express.Router();

const loginHandler=require("../controller/loginController")
const signupHandler=require("../controller/signupController")

router.route("/register")
.post(signupHandler)

router.route("/login")
 .post(loginHandler)
  module.exports=router;