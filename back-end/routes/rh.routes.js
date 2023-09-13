import { Router } from "express";

const router = Router();

import { getRh, postRh } from "../controllers/rh.controllers.js";

router.get('/rh', getRh)
router.post('/eps', postRh)

export default router;