import express from "express";
import dashboard from "../controllers/dashboard.js";
import verifytoken from "../middlewears/verifytoken.js";
import {
  getAlljobs,
  getjob,
  newjob,
  updatejob,
  deletejob,
} from "../controllers/jobControllers.js";
import userCreatedJobs from "../controllers/userCreatedJobs.js";
import whoAmI from "../controllers/whoAmI.js";
const userRoutes = express.Router();
userRoutes.get("/dashboard", verifytoken, dashboard);
userRoutes.get("/whoami/:id", verifytoken, whoAmI);
userRoutes.get("/jobs/userid/:id", verifytoken, userCreatedJobs);
userRoutes.get("/job", verifytoken, getAlljobs);
userRoutes.post("/job", verifytoken, newjob);
userRoutes.get("/job/:id", verifytoken, getjob);
userRoutes.put("/job/:id", verifytoken, updatejob);
userRoutes.delete("/job/:id", verifytoken, deletejob);
export default userRoutes;
