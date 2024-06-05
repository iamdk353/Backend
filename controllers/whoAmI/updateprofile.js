import user from "../../Models/userModel.js";
const updateprofile = async (req, res) => {
  try {
    const { username, _id, name, profile } = req.body;
    const found = await user
      .findOneAndUpdate(
        { _id },
        { username, name, profile },
        { runValidators: true, new: true }
      )
      .select("-password");

    res.json(found);
  } catch (error) {
    res.json(error.message);
  }
};
export default updateprofile;
