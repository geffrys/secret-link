import { Router } from "express";
const router = Router();
import { registerOperation } from "../schemas/operation.schema.js";
// every operation will be validated with the authRequied middleware named vealidateToken

import { validateSchema } from "../middlewares/validator.middleware.js";
import {
  getOperationAlone,
  getOperation,
  postOperation,
  updateOperation,
  getOperations,
  currentOperation,
  operationInprogress,
} from "../controllers/operation.controllers.js";

// router to register an operation
router.post("/operation", postOperation);
router.get("/operation/alone", getOperationAlone);
// router to list an specific operation
router.get("/operation/:id", /*authRequied,*/ getOperation);

// REMINDER: this router is only for testing purposes
router.get("/operation", /*authRequied,*/ getOperations);

router.get("/operation/current", currentOperation);

router.get("/operation/history/:id", operationInprogress);

router.put("/operation/:id", updateOperation);

export default router;
