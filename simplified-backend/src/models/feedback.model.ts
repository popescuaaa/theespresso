import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

// Export the feedback class to be used as TypeScript type
export class Feedback {
  @prop({ required: true })
  appointmentId: string;

  @prop()
  rating: number;

  @prop()
  comments: string;
}

// Create the user model from the User class
const feedbackModel = getModelForClass(Feedback);
export default feedbackModel;
