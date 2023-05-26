import connectDB from "../config/db";

import Question from "../models/questionModel";
import questions from "./question";

import Blog from "../models/blogModel";
import blogs from "./blog";

const importData = async () => {
  connectDB();
  try {
    await Question.deleteMany({});
    await Question.insertMany(questions);

    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log("Seeder data");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default importData;
