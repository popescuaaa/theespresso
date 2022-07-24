import { Router } from "express";

import { deserializeUser } from "../middleware/deserialize-user";
import { requireUser } from "../middleware/require-user";
import { restrictTo } from "../middleware/restrict-to";
import {
  getAllUserTasksHandler,
  registerTaskHandler,
} from "../controllers/task.controller";

const router = Router();
router.use(deserializeUser, requireUser);
router.post("/", restrictTo("user"), getAllUserTasksHandler);
router.post("/create", restrictTo("user"), registerTaskHandler);

export default router;
