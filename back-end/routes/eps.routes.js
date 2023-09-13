import { Router } from "express";

const router = Router();

import { getEps, postEps } from "../controllers/eps.controllers.js";

router.get('/eps', getEps)
router.post('/eps', postEps)

export default router;