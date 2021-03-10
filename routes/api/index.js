const router = require("express").Router();

router.use("/", require("./users"));
router.use("/course", require("./courses"));

module.exports = router;
