import express from "express";
import {
  getQuestionsApi,
  updateQuestion,
} from "../controller/questionController";

const questionRoutes = express.Router();

questionRoutes.get("/", getQuestionsApi);
questionRoutes.put("/:questionId", updateQuestion);

export default questionRoutes;
