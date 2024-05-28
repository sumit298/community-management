import { Document, Schema as MongooseSchema } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type SurveyDocument = Document & Surveys;

@Schema({
  timestamps: true,
})
export class Surveys {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  created_by: MongooseSchema.Types.ObjectId;
}

export const SurveySchema = SchemaFactory.createForClass(Surveys);
