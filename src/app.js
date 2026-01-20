import express from "express";
import cors from "cors";

import recipeRoutes from "./routes/Recipe.route.js";
import uploadRoutes from "./routes/upload.routes.js";
import savedRecipeRoutes from "./routes/SavedRecipe.routes.js";
import loginRoutes from "./routes/Login.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/recipes", recipeRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/saved-recipes", savedRecipeRoutes);
app.use("/api", loginRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

export default app;
