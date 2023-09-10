import { Router } from "express";
import {
  getFoods,
  getFood,
  newFood,
  updatedFood,
  deleteFood,
} from "../controllers/food.controllers.js";
const router = Router();

router.get("/food", getFoods);
router.get("/food/:id_food_type", getFood);
router.post("/food", newFood);
router.put("/food/:id_food_type", updatedFood);
router.delete("/food/:id_food_type", deleteFood);

export default router;
