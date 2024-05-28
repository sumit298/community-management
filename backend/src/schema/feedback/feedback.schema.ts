import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';

export type FeedbackDocument = Document & Feedback;

@Schema({
  timestamps: true,
})
export class Feedback {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  resident_id: MongooseSchema.Types.ObjectId;

  @Prop({
    required: true,
  })
  content: string;

  @Prop({
    default: () => new Date(),
  })
  submitted_at: Date;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
