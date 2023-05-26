import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
} from "../controller/blogController";
import uploadCloud from "../middleware/cloudinary";

const blogRoutes = express.Router();

blogRoutes.get("/", getAllBlogs);
blogRoutes.post("/", uploadCloud.single("image"), createBlog);
blogRoutes.delete("/:blogId", deleteBlog);

export default blogRoutes;
