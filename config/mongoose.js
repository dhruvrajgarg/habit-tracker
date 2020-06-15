const mongoose = require("mongoose");
const router = require("../routes/users");
mongoose.connect("mongodb://localhost/haibt-tracker-dev",{
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Successfull Connected to the Database");
});

module.exports = db;

