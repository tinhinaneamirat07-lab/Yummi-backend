import express from "express";
import {
  getSavedRecipes,
  saveRecipe,
  unsaveRecipe,
} from "../controllers/SavedRecipe.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", auth, getSavedRecipes);
router.post("/", auth, saveRecipe);
router.delete("/:id", auth, unsaveRecipe);

export default router;
