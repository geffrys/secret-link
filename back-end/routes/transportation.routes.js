import { Router } from "express";
import {
  getTransport,
  getTransports,
  newTransport,
  updateTransport,
  deleteTransport,
} from "../controllers/transportation.controllers.js";

const router = Router();

router.get("/transports", getTransports);
router.get("/transports/:id_transport", getTransport);
router.post("/transports", newTransport);
router.put("/transports/:id_transport", updateTransport);
router.delete("/transports/:id_transport", deleteTransport);

export default router;
