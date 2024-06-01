import mongoose, { Schema } from "mongoose";
company: "SEW";
jobstatus: "Interview";
jobtype: "Full time";
location: "SEW";
position: "SEW";
const jobsSchema = new Schema(
  {
    company: {
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
    jobstatus: {
      type: String,
      enum: ["Pending", "Interview", "Declined", "Hiring"],
      default: "Hiring",
    },
    jobtype: {
      type: String,
      enum: ["Full time", "Part time", "Internship"],
      default: "Full time",
    },
    location: {
      type: String,
    },
    position: {
      type: String,
    },
  },
  { timestamps: true }
);
const jobs = mongoose.model("jobs", jobsSchema);
export default jobs;
