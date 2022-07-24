import { object, string, TypeOf, number } from "zod";

export const feedbackSchema = object({
  body: object({
    rating: number({ required_error: "Rating is required" }),
    comments: string({ required_error: "Comments are required" }),
  }),
});

export type CreateFeedbackInput = TypeOf<typeof feedbackSchema>["body"];
