export default function dashboard(req, res) {
  res.json({ msg: Math.round(Math.random() * 100) });
}
