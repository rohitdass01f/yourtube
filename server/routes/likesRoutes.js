import express from "express";
import { handlelike, getallLikedVideo } from "../controllers/likecontroller.js";

const routes = express.Router();
routes.get("/:userId", getallLikedVideo);
routes.post("/:videoId", handlelike);
export default routes;