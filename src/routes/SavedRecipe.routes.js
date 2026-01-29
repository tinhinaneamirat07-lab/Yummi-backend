import express from "express";
import {
  saveRecipe,
  getSavedRecipes,
  deleteSavedRecipe,
  countSavedRecipes,
} from "../controllers/SavedRecipe.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * GET all saved recipes of logged user
 */
router.get("/", auth, getSavedRecipes);

/**
 * GET count of saved recipes
 */
router.get("/count", auth, countSavedRecipes);

/**
 * SAVE a recipe
 */
router.post("/", auth, saveRecipe);

/**
 * DELETE saved recipe
 */
router.delete("/:id", auth, deleteSavedRecipe);

export default router;
