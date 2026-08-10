const express = require("express");
const router = express.Router();
const{createProject, getProjects,getSingleProject,updateProject,deleteProject} = require("../controllers/projectControllers");

const {authMiddleware} = require("../middleware/authMiddleware");




router.post("/createproject",authMiddleware,createProject);
router.get("/getprojects",authMiddleware,getProjects);
router.get("/getprojects/:id",authMiddleware,getSingleProject);
router.put("/updateproject/:id",authMiddleware,updateProject);
router.delete("/deleteproject/:id",authMiddleware,deleteProject);


module.exports = router;