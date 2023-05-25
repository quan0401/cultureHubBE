import connectDB from "../config/db";
import Question from "../models/questionModel";
import questions from "./question";

const importData = async () => {
  connectDB();
  try {
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log("Seeder data");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default importData;
