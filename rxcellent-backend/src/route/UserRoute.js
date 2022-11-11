const router = require("express").Router();
const userController = require("../controller/UserController");

router.post("/register", userController.register); // REGISTER USER
router.post("/", userController.login); // GET ALL USERS

module.exports = router;
