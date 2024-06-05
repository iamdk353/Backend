import express from "express";
const whoami = express.Router();

import byId from "../controllers/whoAmI/byId.js";
import byToken from "../controllers/whoAmI/byToken.js";
import verifytoken from "../middlewears/verifytoken.js";
import updateProfile from "../controllers/whoAmI/updateprofile.js";

whoami.get("/whoami", verifytoken, byToken);
whoami.get("/whoami/:id", verifytoken, byId);
whoami.put("/profile", verifytoken, updateProfile);
export default whoami;
