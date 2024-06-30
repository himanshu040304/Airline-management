const express =require("express");
const{checkUser,checkStaff}=require("../controllers/checker");
const User=require('../models/user.Model')
const asyncHandler=require("express-async-handler");
const router=express.Router();
router.route("/").get(checkUser)
router.route("/company/staff").get(checkStaff)
module.exports=router;