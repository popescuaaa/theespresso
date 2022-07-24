import { object, string, TypeOf } from "zod";

export const adviceSchema = object({
  body: object({
    advice: string({ required_error: "Advice is required" }),
  }),
});

export type CreateAdviceInput = TypeOf<typeof adviceSchema>["body"];
