import { object, string, TypeOf } from "zod";

export const createTaskSchema = object({
  body: object({
    title: string({ required_error: "Title is required" }),
    details: string({ required_error: "Details is required" }),
  }),
});

export type CreateTaskInput = TypeOf<typeof createTaskSchema>["body"];
