import Question from "../models/questionModel";
export const getQuestionsApi = async (req, res, next) => {
  try {
    const questions = await Question.find({})
      .limit(5)
      .sort({ time: 1 })
      .select("-createdAt -updatedAt -__v")
      .orFail();
    res.status(200).send(questions);
  } catch (error) {
    next(error);
  }
};

export const updateQuestion = async (req, res, next) => {
  try {
    const questionId = req.params.questionId;
    if (!questionId) return res.status(400).send("Need questionId");
  } catch (error) {
    next(error);
  }
};
