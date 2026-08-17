const Entry = require("../modals/Entry");
const Project = require("../modals/Project");

const createEntry = async (req, res) => {
  const { title, whatDidYouBuild, problemsFaced, solutions, whatDidYouLearn } =
    req.body;
  const { projectId } = req.params;
  try {
    if (
      !title ||
      !whatDidYouBuild ||
      !problemsFaced ||
      !solutions ||
      !whatDidYouLearn
    ) {
      return res.status(400).json({ message: "All fields necessary" });
    }
    const project = await Project.findOne({
      _id: projectId,
      owner: req.user.id,
    });
    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }
    const newEntry = new Entry({
      title,
      whatDidYouBuild,
      problemsFaced,
      solutions,
      whatDidYouLearn,
      project: projectId,
    });
    await newEntry.save();
    return res.status(201).json({
      message: "Entry created successfully",
      entry: newEntry,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

const getAllEntries = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findOne({
      _id: projectId,
      owner: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const entries = await Entry.find({ project: projectId }).sort({
      createdAt: -1,
    });

    return res.status(200).json({ entries });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

const getSingleEntry = async (req, res) => {
  const { projectId, entryId } = req.params;

  try {
    const project = await Project.findOne({
      _id: projectId,
      owner: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const entry = await Entry.findOne({
      _id: entryId,
      project: projectId,
    });

    if (!entry) {
      return res.status(404).json({
        message: "Entry not found",
      });
    }

    return res.status(200).json({
      message: "Entry fetched successfully",
      entry,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

const updateEntry = async (req, res) => {
  const { title, whatDidYouBuild, problemsFaced, solutions, whatDidYouLearn } =
    req.body;
    const {entryId}= req.params
try{
const entry = await Entry.findOne(entryId)

if (!entry){

   return res.status(404).json({message:"Entry not found"})

  
}
const project  = await  Project.findOne({
_id: entry.project,
owner: req.user.id
})
if (!project) {
    return res.status(403).json({
        message: "You are not authorized"
    });
}


if (title !== undefined) {
    entry.title = title;
}

if (whatDidYouBuild !== undefined) {
    entry.whatDidYouBuild = whatDidYouBuild;
}

if (problemsFaced !== undefined) {
    entry.problemsFaced = problemsFaced;
}

if (solutions !== undefined) {
    entry.solutions = solutions;
}

if (whatDidYouLearn !== undefined) {
    entry.whatDidYouLearn = whatDidYouLearn;
}
await entry.save();
return res.status(200).json({message: "ENtry updated sucessfully"},entry
  
)
}catch(err){

res.json(err.message)

}
};

module.exports = {
  createEntry,
  getAllEntries,
  getSingleEntry,
};
