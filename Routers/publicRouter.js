import express from "express";
import register from "../controllers/register.js";
import login from "../controllers/login.js";
import getuserList from "../controllers/getuserList.js";

const publicRouter = express.Router();
publicRouter.get("/userexist/:name", getuserList);

export default publicRouter;
