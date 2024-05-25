import user from "../Models/userModel.js";
import code from "http-status-codes";
import jwt from "jsonwebtoken";
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res
        .status(code.BAD_REQUEST)
        .json({ msg: "username and password is required" });
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
      const token = jwt.sign({ found }, process.env.JWT_SECRET);
      res.cookie("token", token);
      res.json("User verified");

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default login;
