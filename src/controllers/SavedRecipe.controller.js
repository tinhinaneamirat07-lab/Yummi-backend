import SavedRecipe from "../models/SavedRecipe.js";

// POST /api/saved-recipes
export const addSavedRecipe = async (req, res) => {
  try {
    const { recipeId, title, image, category } = req.body;

    // prevent duplicates
    const exists = await SavedRecipe.findOne({ recipeId });
    if (exists) {
      return res.status(400).json({ message: "Recipe already saved" });
    }

    const saved = await SavedRecipe.create({
      recipeId,
      title,
      image,
      category,
    });

    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET /api/saved-recipes
export const getSavedRecipes = async (req, res) => {
  try {
    const savedRecipes = await SavedRecipe.find().sort({ createdAt: -1 });
    res.status(200).json(savedRecipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/saved-recipes/count
export const getSavedRecipesCount = async (req, res) => {
  try {
    const count = await SavedRecipe.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/saved-recipes/:id
export const deleteSavedRecipe = async (req, res) => {
  try {
    await SavedRecipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Saved recipe deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
