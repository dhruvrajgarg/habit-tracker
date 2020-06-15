const express = require("express");
const router = express.Router();
const detailsController = require("../controllers/details_controller");

router.use("/", detailsController.showDetails);
router.use('/update', detailsController.update);

module.exports = router;
