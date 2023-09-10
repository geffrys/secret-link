import { Router } from "express";
import {
  getActivities,
  getActivity,
  newActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activities.controllers.js";

const router = Router();

router.get("/activities", getActivities);
router.get("/activities/:id_activity", getActivity);
router.post("/activities", newActivity);
router.put("/activities/:id_activity", updateActivity);
router.delete("/activities/:id_activity", deleteActivity);

export default router;
