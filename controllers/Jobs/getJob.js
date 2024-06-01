export const getjob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  res.send("this is get with id  " + req.params.id);
};
