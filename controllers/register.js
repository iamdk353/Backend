import user from "../Models/userModel.js";
import code from "http-status-codes";
import bcrypt from "bcrypt";
const register = async (req, res) => {
  const { username, password, name } = req.body;
  try {
    if (password.length < 8) {
      throw new Error("password must be greater than 8 characters");
    }
    const hash = bcrypt.hashSync(password, 6);
    await user.create({ username, password: hash });
    res.status(code.CREATED).json({ msg: "user created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default register;
