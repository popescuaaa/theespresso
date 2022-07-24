import express from "express";
import { requireUser } from "../middleware/require-user";
import { validate } from "../middleware/validate";
import { deserializeUser } from "../middleware/deserialize-user";
import { adviceSchema } from "../schemas/advice.schema";
import { adviceHandler } from "../controllers/advice.controller";

const router = express.Router();
router.use(deserializeUser, requireUser);

// Register user route
router.post("/create", validate(adviceSchema), adviceHandler);

export default router;
