import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

// Export the feedback class to be used as TypeScript type
export class Advice {
  @prop({ required: true })
  userId: string;

  @prop()
  advice: string;
}

// Create the user model from the User class
const adviceModel = getModelForClass(Advice);
export default adviceModel;
