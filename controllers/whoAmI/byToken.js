const byToken = (req, res) => {
  const currentUser = req.verifiedUser;
  res.json(currentUser);
};
export default byToken;
