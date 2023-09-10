import { Router } from "express";
import {
  deleteHotel,
  getHotel,
  getHotels,
  newHotel,
  updateHotel,
} from "../controllers/hotels.controllers.js";

const router = Router();

router.get("/hotels", getHotels);
router.get("/hotels/:id_hotel", getHotel);
router.post("/hotels", newHotel);
router.put("/hotels/:id_hotel", updateHotel);
router.delete("/hotels/:id_hotel", deleteHotel);

export default router;
