import user from "../Models/userModel.js";
import code from "http-status-codes";
const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await user.create({ username, password });
    console.log({ username, password });
    res.status(code.CREATED).json({ msg: "user created" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export default register;
