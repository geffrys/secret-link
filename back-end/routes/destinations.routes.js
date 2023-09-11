import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {
  getDestinations,
  getDestination,
  newDestination,
  updateDestination,
  deleteDestination,
} from "../controllers/destinations.controllers.js";

const router = Router();

router.get("/destinations", getDestinations);
router.get("/destinations/:id_destination", getDestination);
router.post("/destinations", newDestination);
router.put("/destinations/:id_destination", updateDestination);
router.delete("/destinations/:id_destination", deleteDestination);

export default router;
