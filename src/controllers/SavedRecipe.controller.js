import SavedRecipe from "../models/SavedRecipe.js";

/**
 * =========================
 * SAVE A RECIPE (USER ONLY)
 * POST /api/saved-recipes
 * =========================
 */
export const saveRecipe = async (req, res) => {
  try {
    const { recipeId, title, image } = req.body;

    // check if already saved by this user
    const exists = await SavedRecipe.findOne({
      user: req.user.id,
      recipeId,
    });

    if (exists) {
      return res.status(400).json({
        message: "Recipe already saved",
      });
    }

    const saved = await SavedRecipe.create({
      user: req.user.id,
      recipeId,
      title,
      image,
    });

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({
      message: "Failed to save recipe",
      error: err.message,
    });
  }
};

/**
 * =========================
 * GET SAVED RECIPES (USER ONLY)
 * GET /api/saved-recipes
 * =========================
 */
export const getSavedRecipes = async (req, res) => {
  try {
    const recipes = await SavedRecipe.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(recipes);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch saved recipes",
      error: err.message,
    });
  }
};

/**
 * =========================
 * DELETE SAVED RECIPE (USER ONLY)
 * DELETE /api/saved-recipes/:id
 * =========================
 */
export const deleteSavedRecipe = async (req, res) => {
  try {
    const deleted = await SavedRecipe.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deleted) {
      return res.status(404).json({
        message: "Saved recipe not found",
      });
    }

    res.json({
      message: "Recipe removed from saved",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to delete saved recipe",
      error: err.message,
    });
  }
};

/**
 * =========================
 * COUNT SAVED RECIPES (USER ONLY)
 * GET /api/saved-recipes/count
 * =========================
 */
export const countSavedRecipes = async (req, res) => {
  try {
    const count = await SavedRecipe.countDocuments({
      user: req.user.id,
    });

    res.json({ count });
  } catch (err) {
    res.status(500).json({
      message: "Failed to count saved recipes",
      error: err.message,
    });
  }
};
