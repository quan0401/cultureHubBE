import express from "express";
import questionRoutes from "./questionRoutes";
import blogRoutes from "./blogRoutes";

const app = express();

app.use("/questions", questionRoutes);
app.use("/blogs", blogRoutes);

export default app;
