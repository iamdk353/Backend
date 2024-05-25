import express from "express";
import dashboard from "../controllers/dashboard.js";
import verifytoken from "../middlewears/verifytoken.js";
const userRoutes = express.Router();
userRoutes.get("/dashboard", verifytoken, dashboard);
export default userRoutes;
