import Blog from "../models/blogModel";
const cloudinary = require("cloudinary").v2;

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({}).select("-__v -updatedAt");

    res.status(200).send({ data: blogs, statusCode: 200, message: "" });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const formData = req.file;
    const { title, description, author } = req.body;
    if (!(title && description && author)) {
      await cloudinary.uploader.destroy(formData.filename);
      return res.status(400).send({
        data: "",
        statusCode: 400,
        message: "title, description, author, imageFile",
      });
    }
    const createdBlog = await Blog.create({
      title,
      description,
      author,
      urlImg: formData.path,
    });
    return res
      .status(201)
      .send({ data: createdBlog, statusCode: 201, message: "" });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    console.log({ blogId });
    if (!blogId) return res.status(400).send("Need blog id in param to delete");
    const blog = await Blog.findById(blogId);

    if (!blog) res.status(404).send("Not found blog");

    const deletedBlog = await blog.deleteOne();
    res
      .status(202)
      .send({ message: "Deleted", data: deletedBlog, statusCode: 202 });
  } catch (error) {
    next(error);
  }
};
