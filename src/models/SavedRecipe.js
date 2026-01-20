import mongoose from "mongoose";

const savedRecipeSchema = new mongoose.Schema(
  {
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: String,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.model("SavedRecipe", savedRecipeSchema);
