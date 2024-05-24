import express from "express";
import register from "../controllers/register.js";
import login from "../controllers/login.js";
const AuthRouter = express.Router();
AuthRouter.post("/register", register);
AuthRouter.post("/login", login);
export default AuthRouter;
