import { Router } from "express";
import usersRoutes from "./users.routes.js";
import destinationRoutes from "./destinations.routes.js";
import foodRoutes from "./food.routes.js";
import roomsRoutes from "./rooms.routes.js";
import hotelRoutes from "./hotels.routes.js";
import transportRoutes from "./transportation.routes.js";
import activitiesRoutes from "./activities.routes.js";
import itinerariesRoutes from "./itineraries.routes.js";
import packagesRoutes from "./packages.routes.js";
import auditoryRoutes from "./auditory.routes.js";
import agentTypesRoutes from "./agent_types.routes.js";
const router = Router();

router.use(usersRoutes);
router.use(destinationRoutes);
router.use(foodRoutes);
router.use(roomsRoutes);
router.use(hotelRoutes);
router.use(transportRoutes);
router.use(activitiesRoutes);
router.use(itinerariesRoutes);
router.use(packagesRoutes);
router.use(auditoryRoutes);
router.use(agentTypesRoutes);

export default router;
