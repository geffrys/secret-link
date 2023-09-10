import { Router } from "express";
import usersRoutes from "./users.routes.js";
import operationRoutes from "./operation.routes.js";


const router = Router();

router.use(operationRoutes)

export default router;