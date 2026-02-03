import express from "express";
import cors from "cors";

// Import routes
import authRoutes from "./routes/auth.route.js";
import recipeRoutes from "./routes/Recipe.route.js";
import savedRecipeRoutes from "./routes/SavedRecipe.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  

// Define routes
app.use("/api/auth", authRoutes);              
app.use("/api/recipes", recipeRoutes);       
app.use("/api/saved-recipes", savedRecipeRoutes);  


app.get("/", (req, res) => {
  res.send("API running");
});

export default app;  
