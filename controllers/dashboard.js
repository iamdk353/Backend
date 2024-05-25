const dashboard = (req, res) => {
  res.send(req.verifiedUser);
};
export default dashboard;
