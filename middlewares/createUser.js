import jwt from "jsonwebtoken";
import user from "../models/user.js";
import bcrypt from "bcrypt";
export default async function createUser(req, res, next) {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await user.create({ username, password: hashedPassword });
  const token = jwt.sign({ username }, process.env.JWT_SECRET);
  req.token = token;
  next();
}
