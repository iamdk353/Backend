import jobs from "../../Models/jobs.js";
export const newjob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  try {
    const { company, jobstatus, jobtype, location, position } = req.body;
    const created = await jobs.create({
      company,
      jobstatus,
      jobtype,
      location,
      position,
      createdBy: curUserId,
    });
    res.json(created);
  } catch (error) {
    res.json(error.message);
  }
};
