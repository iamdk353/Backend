import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: [
        5,
        "minimum length is 5 please increrase length of your name",
      ],
      maxLength: [
        15,
        "maximum length is 15 please decrease length of your name",
      ],
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    desc: {
      type: String,
      trim: true,
      maxLength: [
        99,
        "minimum length is 99 please increrase length of your password",
      ],
      required: [true, "desc is required"],
    },
    jobStatus: {
      type: String,
      enum: ["Pending", "Interview", "Declined", "Hiring"],
      default: "Hiring",
    },
    jobType: {
      type: String,
      enum: ["Full time", "Part time", "Internship"],
      default: "Full time",
    },
  },
  { timestamps: true }
);
const jobs = mongoose.model("jobs", jobsSchema);
export default jobs;
