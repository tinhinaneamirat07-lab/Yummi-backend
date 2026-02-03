import mongoose from "mongoose";

const savedRecipeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipeId: {
      type: String,
      required: true,
    },
    title: String,
    image: String,
    mood: String,
  },
  { timestamps: true }
);

export default mongoose.model("SavedRecipe", savedRecipeSchema);
