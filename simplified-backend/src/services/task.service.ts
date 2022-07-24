import { FilterQuery, QueryOptions } from "mongoose";
import taskModel, { Task } from "../models/task.model";

// CreateTask service
export const createTask = async (input: Partial<Task>) => {
  const task = await taskModel.create(input);
  return task.toJSON();
};

// Find Task by Id
export const findTaskById = async (id: string) => {
  return await taskModel.findById(id).lean();
};

// Find All users
export const findAllUserTasks = async (associatedUserId: string) => {
  return await taskModel.find({
    associatedUserId: associatedUserId,
  });
};
