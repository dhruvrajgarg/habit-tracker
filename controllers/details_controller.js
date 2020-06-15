const db = require("../config/mongoose");
const Habit = require("../models/habit");

module.exports.showDetails = function (req, res) {
  var id = req.query.id;
  Habit.findById(id, function (err, fetchedHabit) {
    if (err) {
      console.log(`Error : ${err}`);
      return;
    }
    res.render("details", {
      title: "Details Page",
      name: fetchedHabit,
      a: fetchedHabit.status,
    });
  });
};

module.exports.update = function (req, res) {
  var id = req.query.id;
  let pos = req.originalUrl.substring(
    req.originalUrl.length - 3,
    req.originalUrl.length - 2
  );
  let newStatus;
  if (status == 0) newStatus = 1;
  if (status == 1) newStatus = 2;
  if (status == 2) newStatus = 0;
  Habit.findOne(id, (err, list) => {
    if (err) {
      console.log("error : " + err);
      return;
    }

    if (list != null) {
      list.status[pos] = newStatus;
      list.markModified("done");
      list.save();
    }
    res.redirect("back");
  });
};
