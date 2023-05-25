import Question from "../models/questionModel";

export const getQuestionsApi = async (req, res, next) => {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 5;

    const questions = await Question.find({})
      .skip(offset)
      .limit(limit)
      .sort({ time: 1 })
      .select("-createdAt -updatedAt -__v")
      .orFail();

    res.status(200).send(questions);
  } catch (error) {
    next(error);
  }
};

export const createQuestion = async (req, res, next) => {
  try {
    const {
      questionText,
      options,
      correctAnswer,
      time,
      author,
      point,
      wrongPoint,
      category,
    } = req.body;

    if (
      !(
        questionText &&
        options &&
        correctAnswer &&
        time &&
        author &&
        point &&
        wrongPoint &&
        category
      )
    )
      return res
        .status(400)
        .send(
          "All inputs are required: questionText options, correctAnswer, time, author, point, wrongPoint, category"
        );

    const createdQuestion = await Question.create({
      questionText,
      options,
      correctAnswer,
      time,
      author,
      point,
      wrongPoint,
      category,
    });
    res.status(201).send(createdQuestion);
  } catch (error) {
    next(error);
  }
};

export const updateQuestion = async (req, res, next) => {
  try {
    const questionId = req.params.questionId;
    if (!questionId) return res.status(400).send("Need questionId");
    const questionData = await Question.findById(questionId);

    questionData.questionText =
      req.body.questionText || questionData.questionText;
    questionData.options = req.body.options || questionData.options;
    questionData.correctAnswer =
      req.body.correctAnswer || questionData.correctAnswer;
    questionData.time = req.body.time || questionData.time;
    questionData.author = req.body.author || questionData.author;
    questionData.point = req.body.point || questionData.point;
    questionData.wrongPoint = req.body.wrongPoint || questionData.wrongPoint;
    questionData.category = req.body.category || questionData.category;

    const saveQuestion = await questionData.save();
    res.status(200).send(saveQuestion);
  } catch (error) {
    next(error);
  }
};

export const deleteQuestion = async (req, res, next) => {
  try {
    const questionId = req.params.questionId;
    if (!questionId) return res.status(400).send("Need questionId");

    const question = await Question.findById(questionId);

    if (!question) return res.status(400).send("Not found question");

    const deletedQuestion = await question.deleteOne();

    res.status(200).send({ deletedQuestion });
  } catch (error) {
    next(error);
  }
};
