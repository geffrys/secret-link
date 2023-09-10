import { Router } from "express";
import {
  getRooms,
  getRoom,
  newRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/rooms.controllers.js";
const router = Router();

router.get("/rooms", getRooms);
router.get("/rooms/:id_room_type", getRoom);
router.post("/rooms", newRoom);
router.put("/rooms/:id_room_type", updateRoom);
router.delete("/rooms/:id_room_type", deleteRoom);

export default router;
