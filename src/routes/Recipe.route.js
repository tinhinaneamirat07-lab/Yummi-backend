import express from "express";
import {
  createRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe, 
  getRandomRecipe,
} from "../controllers/Recipe.controller.js";




const router = express.Router();

router.post("/", createRecipe);
router.get("/", getRecipes);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe); 
router.get("/random", getRandomRecipe);



export default router;
