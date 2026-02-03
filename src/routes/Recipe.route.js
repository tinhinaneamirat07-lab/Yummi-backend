import express from "express";
import { getRecipes, addRecipe, deleteRecipe } from "../controllers/recipeController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", addRecipe);
router.delete("/:id", auth, deleteRecipe);

export default router;





