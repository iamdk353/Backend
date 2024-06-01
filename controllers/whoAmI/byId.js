import user from "../../Models/userModel.js";

const byId = async (req, res) => {
  const _id = req.params.id;
  const found = await user.findById({ _id }).select("-password");
  res.send(found);
};
export default byId;
