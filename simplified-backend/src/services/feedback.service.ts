import { omit, get } from "lodash";
import { excludedFields } from "../controllers/auth.controller";
import feedbackModel, { Feedback } from "../models/feedback.model";

// Create Feedback service
export const createFeedback = async (input: Partial<Feedback>) => {
  const feedback = await feedbackModel.create(input);
  return feedback.toJSON();
};

// Find Feedback by Id
export const findFeedbackById = async (id: string) => {
  const feedback = await feedbackModel.findById(id).lean();
  return feedback;
};

// Find All user Appointments
export const findAllAppointmentFeedbacks = async (appointmentId: string) => {
  return await feedbackModel.find({
    appointmentId: appointmentId,
  });
};
