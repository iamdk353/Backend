import jobs from "../../Models/jobs.js";
export const getAlljobs = async (req, res) => {
  const curUserId = req.verifiedUser._id;

  try {
    const { company, jobstatus, jobtype, location, position } = req.body;
    const found = await jobs.find({ createdBy: curUserId });
    res.send(found);
  } catch (error) {
    res.json(error.message);
  }
};
