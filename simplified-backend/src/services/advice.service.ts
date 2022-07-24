import { Advice } from "../models/advice.model";
import adviceModel from "../models/advice.model";

// Create Advice service
export const createAdvice = async (input: Partial<Advice>) => {
  const advice = await adviceModel.create(input);
  return advice.toJSON();
};

// Find Advice by Id
export const findAdviceById = async (id: string) => {
  const advice = await adviceModel.findById(id).lean();
  return advice;
};

// Find All user Advice
export const findAllUserAdvice = async () => {
  return await adviceModel.find();
};
