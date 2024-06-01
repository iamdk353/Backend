const byToken = (req, res) => {
  const currentUser = req.verifiedUser;
  res.send(currentUser);
};
export default byToken;
