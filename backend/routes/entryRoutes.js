const express = require("express");
const router = express.Router();
const {
  createEntry,
  getAllEntries,
  getSingleEntry,
  getSingleEntries,
  updateEntry,
  deleteEntry
} = require("../controllers/entryControllers");



const { authMiddleware } = require("../middleware/authMiddleware");
router.post("/:projectId/createentry", authMiddleware, createEntry);
router.get("/:projectId/getallentries", authMiddleware, getAllEntries);
router.get("/:projectId/getsingleentry/:entryId", authMiddleware, getSingleEntry);
router.get("/updateentry/:entryId", authMiddleware,updateEntry)
router.get("/deleteentry/:entryId",authMiddleware,deleteEntry)


module.exports= router;
