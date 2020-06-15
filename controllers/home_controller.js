const db = require("../config/mongoose");
const Habit = require("../models/habit");

module.exports.home = function (req, res) {
  Habit.find({}, function (err, fetchedHabits) {
    if (err) {
      console.log("Error in Fetching Habits");
      return;
    }
    return res.render("home", {
      title: "Habit Tracker App",
      habit_list: fetchedHabits,
    });
  });
};
