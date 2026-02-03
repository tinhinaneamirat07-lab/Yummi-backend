import SavedRecipe from "../models/SavedRecipe.js";

// Get saved recipes for a user
export const getSavedRecipes = async (req, res) => {
  try {
    const saved = await SavedRecipe.find({ userId: req.user.id });
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Save a recipe
export const saveRecipe = async (req, res) => {
  try {
    const saved = new SavedRecipe({
      userId: req.user.id,
      recipeId: req.body.recipeId,
      title: req.body.title,
      image: req.body.image,
    });

    await saved.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Unsave a recipe
export const unsaveRecipe = async (req, res) => {
  try {
    await SavedRecipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Removed from saved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
