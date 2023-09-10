import { Router } from "express";
import {
  getUsers,
  getUser,
  updateUser,
  newUser,
  deleteUser,
  LogIn,
  logOut,
  profile,
  verifyToken,
} from "../controllers/users.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id_agent", getUser);
router.post("/users", validateSchema(registerSchema), newUser); //register user
router.post("/login", validateSchema(loginSchema), LogIn);
router.post("/logout", logOut);
router.get("/profile", authRequired, profile);
router.get("/verify", verifyToken);
router.put("/users/:id_agent", updateUser);
router.delete("/users/:id_agent", deleteUser);

export default router;
