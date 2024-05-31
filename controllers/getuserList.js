import user from "../Models/userModel.js";

const getuserList = async (req, res) => {
  const username = req.params.name;
  const userlist = await user
    .find({
      username: { $regex: `^${username}`, $options: "i" },
    })
    .select("username");
  if (userlist.length === 0) {
    res.json([]);
    return;
  } else {
    res.json(userlist);
    return;
  }
};
export default getuserList;
