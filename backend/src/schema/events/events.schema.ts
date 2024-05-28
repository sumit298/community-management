import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type EventsDocument = Document & Events;

@Schema({
  timestamps: true,
})
export class Events {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    required: true,
  })
  event_date: Date;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
  })
  createdby: MongooseSchema.Types.ObjectId;
}

export const EventsSchema = SchemaFactory.createForClass(Events);
