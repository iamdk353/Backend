import jobs from "../../Models/jobs.js";
export const deletejob = async (req, res) => {
  const curUserId = req.verifiedUser._id;
  const { id } = req.params;

  try {
    const deleted = await jobs.findOneAndDelete({ _id: id });

    console.log(id);
    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Job deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
