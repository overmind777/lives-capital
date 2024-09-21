import { Router } from "express";
import fetchIp  from "../functions/getIp.js";

const routerIp = Router();

routerIp.get("/address", fetchIp);

export default routerIp;
