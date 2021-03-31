const router = require("express").Router();
const bookRouters = require("./books");

router.use("/books",bookRouters);

module.exports = router;