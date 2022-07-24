import { NextFunction, Request, Response } from "express";
import { createUser, findAllUsers } from "../services/user.service";
import { createTask, findAllUserTasks } from "../services/task.service";
import { CreateUserInput } from "../schemas/user.schema";

export const getAllUserTasksHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    const associatedUserId = user._id.valueOf();
    const tasks = await findAllUserTasks(associatedUserId);

    res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const registerTaskHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    const associatedUserId = user._id.valueOf();
    const task = await createTask({
      title: req.body.title,
      details: req.body.details,
      associatedUserId: associatedUserId,
    });

    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Creating a task filed",
      });
    }
    next(err);
  }
};
