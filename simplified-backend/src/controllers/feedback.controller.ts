import { NextFunction, Request, Response } from "express";
import { CreateFeedbackInput } from "../schemas/feedback.schema";
import { createFeedback } from "../services/feedback.service";

export const feedbackHandler = async (
  req: Request<{}, {}, CreateFeedbackInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const feedback = await createFeedback({
      rating: req.body.rating,
      comments: req.body.comments,
      appointmentId: req.body.appointmentId,
    });

    res.status(201).json({
      status: "success",
      data: {
        feedback,
      },
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Feedback already exist",
      });
    }
    next(err);
  }
};
