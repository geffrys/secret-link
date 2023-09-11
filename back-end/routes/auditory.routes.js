import { Router } from "express";
import {
  getAuditories,
  getAuditory,
  newAuditory,
  finishAuditory,
} from "../controllers/auditory.controllers.js";

const router = Router();

router.get("/auditory", getAuditories);
router.get("/auditory/:id_auditory_sesion", getAuditory);
router.post("/auditory", newAuditory);
router.put("/auditory/", finishAuditory);

export default router;
