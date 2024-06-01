import jobs from "../../Models/jobs.js";

const userCreatedJobs = async (req, res) => {
  try {
    const _id = req.params.id;
    const job = await jobs.find({ createdBy: _id });
    res.json({ job });
  } catch (error) {
    res.json({ error });
  }
};
export default userCreatedJobs;
