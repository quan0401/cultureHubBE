const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    timeLimit: { type: Number, required: true },
    totalPoints: { type: Number, required: true, default: 100 },
    // Other question properties
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
