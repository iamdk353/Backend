export const updatejob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  res.send("this is update job with id  " + req.params.id);
};
