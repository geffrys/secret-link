import { Router } from "express";
const Route = Router();
import { registerAdditionalPeople, healthClientInfo, registerClientInfo, registerOperation } from "../schemas/operation.schema.js";
// every operation will be validated with the authRequied middleware named vealidateToken

import { authRequied } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { postClient, getOperations, postOperation, postAdditionalPeople, postHealthInfo, updateOperation } from "../controllers/operation.controllers.js";

Route.post("/operation/user-registration", authRequied , validateSchema(registerClientInfo) , postClient);
Route.post("/operation/adding-people", authRequied , validateSchema(registerAdditionalPeople) ,newAdditionalPeople);
Route.post("/operation/health-info", authRequied , validateSchema(healthClientInfo) ,newHealthInfo);
Route.post("/operation", authRequied , validateSchema(registerOperation) ,newOperation);
Route.get("/operation", authRequied , getOperation);

export default Route;

