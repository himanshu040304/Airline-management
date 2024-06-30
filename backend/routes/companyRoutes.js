const express =require ("express");
const router=express.Router();
const{addStaff,logStaff,managerCheck}=require("../controllers/companyController");
router.route('/add').post(addStaff)
router.route('/log').post(logStaff)
router.route('/manager/check').post(managerCheck)
module.exports=router;