import express from "express";
import { getallvideo, uploadvideo, getChannelVideos } from "../controllers/videocontroller.js";
import upload from "../filehelper/filehelper.js";

const routes = express.Router();

routes.post("/upload", upload.single("file"), uploadvideo);
routes.get("/getall", getallvideo);
routes.get("/channel/:userId", getChannelVideos);

export default routes;