import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Task {
  @prop({ required: true })
  title: string;

  @prop({ required: true, minlength: 0, maxLength: 1000 })
  details: string;

  @prop({ required: true })
  associatedUserId: string;
}

const taskModel = getModelForClass(Task);
export default taskModel;
