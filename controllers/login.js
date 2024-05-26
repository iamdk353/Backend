import user from "../Models/userModel.js";
import code from "http-status-codes";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const login = async (req, res) => {
  const { username, password } = req.body;
  // console.log({ username, password });
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
    const match = bcrypt.compareSync(password, found.password);

    if (!match) {
      // console.log("wrong password");
      res.status(code.NOT_FOUND).json({ msg: "wrong credentials" });
      return;
    } else {
      const token = jwt.sign({ id: found._id }, process.env.JWT_SECRET);
      res.json({ msg: token, info: "user verified" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default login;
