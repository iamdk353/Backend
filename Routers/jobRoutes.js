import express from "express";

import verifytoken from "../middlewears/verifytoken.js";
import {
  deletejob,
  getAlljobs,
  getjob,
  newjob,
  updatejob,
  userCreatedJobs,
} from "../controllers/Jobs/Exporter.js";

const userRoutes = express.Router();

userRoutes.get("/", verifytoken, getAlljobs);
userRoutes.get("/created/:id", verifytoken, userCreatedJobs);
userRoutes.post("/", verifytoken, newjob);
userRoutes.get("/:id", verifytoken, getjob);
userRoutes.put("/:id", verifytoken, updatejob);
userRoutes.delete("/:id", verifytoken, deletejob);
export default userRoutes;
