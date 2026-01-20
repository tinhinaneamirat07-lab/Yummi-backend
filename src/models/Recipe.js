import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: String,
    category: String,
    description: String,
    prep: String,
    cook: String,
    servings: Number,
    ingredients: [String],
    instructions: String,
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
