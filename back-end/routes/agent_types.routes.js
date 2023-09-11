import { Router } from "express";
import {
  getAgentTypes,
  getAgentType,
  newAgentType,
  updateAgentType,
  deleteAgentType,
} from "../controllers/agent_types.controllers.js";

const router = Router();

router.get("/agent_types", getAgentTypes);
router.get("/agent_types/:id_agent_type", getAgentType);
router.post("/agent_types", newAgentType);
router.put("/agent_types/:id_agent_type", updateAgentType);
router.delete("/agent_types/:id_agent_type", deleteAgentType);

export default router;
