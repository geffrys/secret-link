import { Router } from "express";
import {
  getItineraries,
  getItinerary,
  newItinerary,
  updateItinerary,
  deleteItinerary,
} from "../controllers/itineraries.controllers.js";
const router = Router();

router.get("/itineraries", getItineraries);
router.get("/itineraries/:id_itinerary", getItinerary);
router.post("/itineraries", newItinerary);
router.put("/itineraries/:id_itinerary", updateItinerary);
router.delete("/itineraries/:id_itinerary", deleteItinerary);

export default router;
