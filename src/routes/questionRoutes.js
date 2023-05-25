import express from "express";
import {
  createQuestion,
  deleteQuestion,
  getQuestionsApi,
  updateQuestion,
} from "../controller/questionController";

const questionRoutes = express.Router();

questionRoutes.get("/", getQuestionsApi);
questionRoutes.put("/:questionId", updateQuestion);
questionRoutes.post("/", createQuestion);
questionRoutes.delete("/:questionId", deleteQuestion);

export default questionRoutes;
