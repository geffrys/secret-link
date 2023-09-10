import { Router } from "express";
const router = Router();
import { registerAdditionalPeople, healthClientInfo, registerClientInfo, registerOperation, updateOperation } from "../schemas/operation.schema.js";
// every operation will be validated with the authRequied middleware named vealidateToken

// import { authRequied } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { postClient, getOperation, postOperation, postAdditionalPeople, postHealthInfo,/* updateOperation*/getOperations } from "../controllers/operation.controllers.js";

// TODO: remember to uncomment the authRequied middleware, and validateSchema middleware.
// router to register the main client
router.post("/operation/user-registration", /*authRequied ,*/ validateSchema(registerClientInfo), postClient);
// router to register the additional people of the client
router.post("/operation/adding-people", /*authRequied,*/  validateSchema(registerAdditionalPeople),postAdditionalPeople);
// router to register the health info of the client or additional people 
router.post("/operation/health-info", /*authRequied , validateSchema(healthClientInfo) ,*/postHealthInfo);
// router to register an operation
router.post("/operation", /*authRequied , validateSchema(registerOperation) ,*/postOperation);
// router to list an specific operation
router.get("/operation/:id", /*authRequied,*/ getOperation);

// REMINDER: this router is only for testing purposes
router.get("/operation", /*authRequied,*/ getOperations);

export default router;