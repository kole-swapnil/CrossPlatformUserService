const express = require("express");
const {signup} = require("../controllers/users-controller")
const router = express.Router();

// router.get('/',);
router.route("/").post(signup);
