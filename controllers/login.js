import user from "../Models/userModel.js";
import code from "http-status-codes";
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res
        .status(code.BAD_REQUEST)
        .json({ msg: "username or password is required" });
      return;
    }
    const found = await user.findOne({ username });
    if (!found) {
      res.status(code.NOT_FOUND).json({ msg: "wrong credentials" });
      return;
    }
    if (found.password !== password) {
      console.log("wrong password");
      res.status(code.NOT_FOUND).json({ msg: "wrong credentials" });
      return;
    } else {
      res.json("user is verified create json");
      return;
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export default login;
