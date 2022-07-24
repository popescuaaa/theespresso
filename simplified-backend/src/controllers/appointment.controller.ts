import { NextFunction, Request, Response } from "express";
import { CreateAppointmentInput } from "../schemas/appointment.schema";
import { createAppointment } from "../services/appointment.service";

export const appointmentHandler = async (
  req: Request<{}, {}, CreateAppointmentInput>,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  console.log(user);
  try {
    const appointment = await createAppointment({
      appointmentDate: req.body.appointmentDate,
      appointmentHour: req.body.appointmentHour,
      observations: req.body.observations,
      userId: res.locals.user._id.valueOf(),
    });

    res.status(201).json({
      status: "success",
      data: {
        appointment,
      },
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Appointment already exist",
      });
    }
    next(err);
  }
};
