import { Router } from "express";
const router = Router();
import { postAdditionalPeople, postClient, getClientAdditionalPeople , testHealthInformation, getClients} from "../controllers/client.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerClient, registerAdditionalPeople } from "../schemas/client.schema.js";
// import { authRequired } from "../middlewares/validateToken.js";


router.get('/clients', /*authRequired,*/ getClients)
router.post('/clients',/*authRequired,*/ validateSchema(registerClient), postClient)
router.post('/clients/addpeople', /*authRequired,*/validateSchema(registerAdditionalPeople) ,postAdditionalPeople)
router.get('/clients/:id/people', /*authRequired,*/ getClientAdditionalPeople)
// router.post('/clients/test', testHealthInformation)


export default router;
