const express = require("express");
const router = express.Router();
const{createProject} = require("../controllers/projectControllers");

const {authMiddleware} = require("../middleware/authMiddleware");




router.post("/projects",authMiddleware,createProject);


module.exports = router;