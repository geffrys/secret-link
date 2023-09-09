import { Router } from "express";
const Route = Router();
import { registerAdditionalPeople, healthClientInfo, registerClientInfo, registerOperation, updateOperation } from "../schemas/operation.schema.js";
// every operation will be validated with the authRequied middleware named vealidateToken

import { authRequied } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { postClient, getOperation, postOperation, postAdditionalPeople, postHealthInfo, updateOperation } from "../controllers/operation.controllers.js";

// route to register the main client
Route.post("/operation/user-registration", authRequied , validateSchema(registerClientInfo) , postClient);
// route to register the additional people of the client
Route.post("/operation/adding-people", authRequied , validateSchema(registerAdditionalPeople) ,postAdditionalPeople);
// route to register the health info of the client or additional people 
Route.post("/operation/health-info", authRequied , validateSchema(healthClientInfo) ,postHealthInfo);
// route to register an operation
Route.post("/operation", authRequied , validateSchema(registerOperation) ,postOperation);
// route to list an specific operation
Route.get("/operation/:id", authRequied, getOperation);

export default Route;