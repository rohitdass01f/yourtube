import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoute.js";
import likesRoutes from "./routes/likesRoutes.js";
import watchlaterRoutes from "./routes/watchlaterRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import commentRoutes from "./routes/commentcontroller.js";
import path from "path";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads",express.static(path.join("uploads")));
app.get("/", (req, res) => {
res.send("youtube server is running");
});

app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/like", likesRoutes);
app.use("/watchlater", watchlaterRoutes);
app.use("/history", historyRoutes);
app.use("/comment", commentRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL).then(() => {
console.log("Connected to the database");
}).catch((error) => {
console.error("Error connecting to the database", error);
});