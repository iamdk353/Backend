import jwt from "jsonwebtoken";
import code from "http-status-codes";
import user from "../models/user.js";
import bcrypt from "bcrypt";
export default async function verifyUser(req, res, next) {
  const { username, password } = req.body;
  if (
    !req.headers.authorization &&
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    res.status(code.UNAUTHORIZED).json({ msg: "please register a account" });
    return;
  }
  const token = req.headers.authorization.split(" ")[1];
  const decodeUser = jwt.decode(token, process.env.JWT_SECRET);
  if (decodeUser.username !== username) {
    res.json({ msg: "user didnt match with Auth token" });
    return;
  }
  const [found] = await user.find({ username });
  bcrypt.compare(password, found.password, (err, result) => {
    if (err) throw err;

    if (result) {
      console.log("password match");
      next();
      return;
    } else {
      console.log("password didnt match");
      res.status(code.BAD_REQUEST).json({ msg: "incorrect password " });
      return;
    }
  });
}
