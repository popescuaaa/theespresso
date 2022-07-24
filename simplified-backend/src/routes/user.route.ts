import { Router } from "express";
import {
  getAllUsersHandler,
  getMeHandler,
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserialize-user";
import { requireUser } from "../middleware/require-user";
import { restrictTo } from "../middleware/restrict-to";

const router = Router();
router.use(deserializeUser, requireUser);
router.get("/", restrictTo("admin"), getAllUsersHandler);
router.get("/me", getMeHandler);

export default router;
