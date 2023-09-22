import { Router } from "express";
import {
  getHeadquarters,
  postHeadquarters,
} from "../controllers/headquarters.controllers.js";

const router = Router();

router.get("/headquarter", getHeadquarters);
router.post("/headquarter", postHeadquarters);

export default router;
