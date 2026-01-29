import mongoose from "mongoose";

const savedRecipeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
    title: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("SavedRecipe", savedRecipeSchema);
