const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true, unique: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true },
    time: { type: Number, required: true },
    author: { type: String },
    point: { type: Number, required: true },
    wrongPoint: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },
    image: {
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/dg3fsapzu/image/upload/v1684997117/iStock-641930392-1_khpkqi.jpg",
      },
    },

    // Other question properties
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
