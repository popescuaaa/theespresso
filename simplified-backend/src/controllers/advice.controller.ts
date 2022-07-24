import { NextFunction, Request, Response } from "express";
import { CreateAdviceInput } from "../schemas/advice.schema";
import { createAdvice } from "../services/advice.service";

export const adviceHandler = async (
  req: Request<{}, {}, CreateAdviceInput>,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  console.log(user);
  try {
    const advice = await createAdvice({
      advice: req.body.advice,
      userId: res.locals.user._id.valueOf(),
    });

    res.status(201).json({
      status: "success",
      data: {
        advice,
      },
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Advice already exist",
      });
    }
    next(err);
  }
};
