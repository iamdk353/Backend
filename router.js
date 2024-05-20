import express from "express";
import chalk from "chalk";
import code from "http-status-codes";

import Login from "./controllers/Login.js";
import signup from "./controllers/Singup.js";

const router = express.Router();

import validateInp from "./middlewares/validateInp.js";
import validateUser from "./middlewares/validateUser.js";
import createUser from "./middlewares/createUser.js";
import verifyUser from "./middlewares/verifyUser.js";

router.post("/signup", validateInp, validateUser, createUser, signup);
router.post("/login", validateInp, verifyUser, Login);

export default router;
