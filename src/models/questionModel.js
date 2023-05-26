const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true, unique: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true },
    point: { type: Number, required: true },
    wrongPoint: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },

    // Other question properties
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
