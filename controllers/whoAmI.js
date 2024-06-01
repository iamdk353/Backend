import user from "../Models/userModel.js";

const whoAmI = async (req, res) => {
  const _id = req.params.id;
  const found = await user.find({ _id }).select("-password");
  res.json(found);
};
export default whoAmI;
