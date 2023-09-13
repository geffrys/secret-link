import { Router } from "express";

const router = Router();

import { getDocumentTypes, postDocumentTypes } from "../controllers/document_types.controllers.js";

router.get("/document-types", getDocumentTypes )
router.post("/document-types", postDocumentTypes)

export default router;