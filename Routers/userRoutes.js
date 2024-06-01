import express from "express";

import verifytoken from "../middlewears/verifytoken.js";
import {
  deletejob,
  getAlljobs,
  getjob,
  newjob,
  updatejob,
} from "../controllers/Jobs/Exporter.js";

const userRoutes = express.Router();

userRoutes.get("/job", verifytoken, getAlljobs);
userRoutes.post("/job", verifytoken, newjob);
userRoutes.get("/job/:id", verifytoken, getjob);
userRoutes.put("/job/:id", verifytoken, updatejob);
userRoutes.delete("/job/:id", verifytoken, deletejob);
export default userRoutes;
