import express from "express";
import register from "../controllers/Auth/register.js";
import login from "../controllers/Auth/login.js";
import verifytoken from "../middlewears/verifytoken.js";

const AuthRouter = express.Router();
AuthRouter.post("/register", register);
AuthRouter.post("/login", login);

export default AuthRouter;
