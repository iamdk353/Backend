import job from "../Models/jobs.js";

export const getAlljobs = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  try {
    const { title, content } = req.body;
    await job.create({ title, content, createdBy: curUserId });
    res.send("created job");
  } catch (error) {
    res.json(error.message);
  }
};
export const getjob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  res.send("this is get with id  " + req.params.id);
};
export const newjob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  res.send("this is new job");
};
export const updatejob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  res.send("this is update job with id  " + req.params.id);
};
export const deletejob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  res.send("this is delets the job with id  " + req.params.id);
};
