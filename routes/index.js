const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
console.log("Router Loaded");

const db = require("../config/mongoose");
const Habit = require("../models/habit");

router.get("/", homeController.home);
//CREATE CONTACT
router.post("/create-habit", function (req, res) {
  Habit.create(
    {
      habit: req.body.habit,
      status :[0,0,0,0,0,0,0]
    },
    function (err, newHabit) {
      if (err) {
        console.log("Error in creating Habit");
        return;
      }
      console.log("*******", newHabit);
      return res.redirect("back");
    }
  );
});
//DELETE CONTACT
router.get("/delete-habit", function (req, res) {
  //GET ID FROM URL
  let id = req.query.id;

  //FIND CONTACT IN DATABASE AND DELETE IT.
  Habit.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting Habit form Database");
      return;
    }
  });
  return res.redirect("back");
});
// NEW ROUTER FOR DETAILED VIEW
router.use("/details",require('./details'));

module.exports = router;
