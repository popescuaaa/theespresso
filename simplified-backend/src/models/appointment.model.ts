import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

// Export the Appointment class to be used as TypeScript type
export class Appointment {
  @prop({ required: true })
  appointmentDate: string;

  @prop({ required: true })
  appointmentHour: string;

  @prop({ required: true })
  observations: string;

  @prop({ required: true })
  userId: string;
}

const appointmentModel = getModelForClass(Appointment);
export default appointmentModel;
