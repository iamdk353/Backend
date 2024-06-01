import express from "express";
const whoami = express.Router();

import byId from "../controllers/whoAmI/byId.js";
import byToken from "../controllers/whoAmI/byToken.js";
import verifytoken from "../middlewears/verifytoken.js";

whoami.get("/whoami", verifytoken, byToken);
whoami.get("/whoami/:id", verifytoken, byId);
export default whoami;
