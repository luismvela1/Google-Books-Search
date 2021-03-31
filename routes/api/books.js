const router = require("express").Router();
const { create } = require("../../controllers/booksControllers");
const booksController = require("../../controllers/booksControllers");

router.route("/")
.get(booksController.findAll)
.post(booksController.update);

router.route("/:id")
.get(booksController.findOne)
.put(booksController,create)
.delete(booksController.remove);

module.exports = router;