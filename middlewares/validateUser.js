import user from "../models/user.js";
import code from "http-status-codes";

export default async function validateUser(req, res, next) {
  const { username, password } = req.body;
  const found = await user.find({ username });

  if (found.length > 0) {
    res.status(code.BAD_REQUEST).json({ msg: "user already exist" });
    return;
  }
  next();
}
