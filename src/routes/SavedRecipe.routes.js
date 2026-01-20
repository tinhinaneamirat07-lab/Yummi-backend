import express from "express";
import {
  addSavedRecipe,
  getSavedRecipes,
  getSavedRecipesCount,
  deleteSavedRecipe,
} from "../controllers/SavedRecipe.controller.js";

const router = express.Router();

// POST
router.post("/", addSavedRecipe);

// GET all
router.get("/", getSavedRecipes);

// GET count
router.get("/count", getSavedRecipesCount);

// DELETE
router.delete("/:id", deleteSavedRecipe);

export default router;
