const mongoose = require("mongoose");
// Entry Model
// Represents a single development session inside a project.
const entrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    whatDidYouBuild: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 1000,
    },
    problemsFaced: {
      type: String,
      trim: true,
    },
    solutions: {
      type: String,
      trim: true,
    },
    whatDidYouLearn: {
      type: String,
      trim: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  },
  { timestamps: true },
);

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
