import code from "http-status-codes";
import jwt from "jsonwebtoken";
import user from "../Models/userModel.js";
const verifytoken = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer")) {
    res.status(code.UNAUTHORIZED).json({ msg: "unauthorized" });
    return;
  }
  const token = auth.split(" ")[1];
  const { id } = jwt.decode(token, process.env.JWT_SECRET);
  const found = await user.findOne({ _id: id }).select("-password");
  if (!found) {
    res.status(code.UNAUTHORIZED).json({ msg: "invalid token" });
    return;
  }
  req.verifiedUser = found;
  next();
};
export default verifytoken;
