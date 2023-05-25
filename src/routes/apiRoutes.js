import express from "express";
import questionRoutes from "./questionRoutes";

const routes = express.Router();

const app = express();

app.use("/questions", questionRoutes);

export default app;
