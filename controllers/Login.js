import user from "../models/user.js";

export default async function Login(req, res) {
  const { username } = req.body;
  const find = await user.find({ username });
  res.json({ msg: "welcome  " + find });
  return;
}
// const { username, password } = req.body;
// const found = await user.find({ username });
// console.log(found);
// res.send("this is a login request");
