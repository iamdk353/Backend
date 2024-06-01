export const deletejob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  res.send("this is deleted  job");
};
