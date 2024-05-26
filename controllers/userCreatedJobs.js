import blog from "../Models/jobs.js";

const userCreatedJobs = async (req, res) => {
  const userId = req.params.id;
  const found = await blog.find({ createdBy: userId });
  res.json(found);
};
export default userCreatedJobs;
