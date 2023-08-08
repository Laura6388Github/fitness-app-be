const express = require("express");
const { protect, onlyAdmin } = require("../middleware/auth");
const { getUsers, getUser } = require("../controllers/user");
const { updateUser } = require("../controllers/user");
const router = express.Router();

router.route("/").get(onlyAdmin, getUsers);
router.route("/:id").post(protect, updateUser);
router.route("/:id").get(protect, getUser);

module.exports = router;
