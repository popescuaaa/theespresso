import express from "express";
import { validate } from "../middleware/validate";
import { feedbackSchema } from "../schemas/feedback.schema";
import { feedbackHandler } from "../controllers/feedback.controller";

const router = express.Router();

// Register feedback route
router.post("/create", validate(feedbackSchema), feedbackHandler);

export default router;
