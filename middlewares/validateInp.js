import code from "http-status-codes";

export default function validateInp(req, res, next) {
  const { username, password } = req.body;
  if (!username) {
    res.status(code.BAD_REQUEST).json({ msg: "username required" });
    return;
  }
  if (!password) {
    res.status(code.BAD_REQUEST).json({ msg: "password required" });
    return;
  }
  next();
}
