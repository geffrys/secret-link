import { Router } from "express";
import {
  getPackages,
  getPackage,
  newPackage,
  updatePackage,
  deletePackage,
} from "../controllers/packages.controllers.js";

const router = Router();

router.get("/packages", getPackages);
router.get("/packages/:id_travel_pack", getPackage);
router.post("/packages", newPackage);
router.put("/packages/:id_travel_pack", updatePackage);
router.delete("/packages/:id_travel_pack", deletePackage);

export default router;
