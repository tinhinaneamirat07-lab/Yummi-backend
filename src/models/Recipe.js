import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: { type: String, required: true },
    ingredients: [String],
    instructions: String,
    category: {
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
