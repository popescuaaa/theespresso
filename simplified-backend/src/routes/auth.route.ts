import { Router } from "express";
import { loginHandler, registerHandler } from "../controllers/auth.controller";
import { validate } from "../middleware/validate";
import { createUserSchema, loginUserSchema } from "../schemas/user.schema";

const router = Router();
router.post("/register", validate(createUserSchema), registerHandler);
router.post("/login", validate(loginUserSchema), loginHandler);

export default router;
