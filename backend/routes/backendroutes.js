const express =require ("express");
const router=express.Router();
const{getFlight,getAllFlight,setFlight,addSeats,getUser,updateUser,seatCheck,deleteUser}=require("../controllers/controller");
router.route('/getflights').post(getAllFlight)
router.route("/flights").post(getFlight);
router.route("/seats").post(seatCheck)
router.route("/addseats").post(addSeats)
router.route("/setflights").post(setFlight)
router.route("/:id").put(updateUser).get(getUser).delete(deleteUser);
module.exports=router;