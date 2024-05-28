import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type EventRegistrationDocument = Document & EventRegistration;

@Schema({
  timestamps: true,
})
export class EventRegistration {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Events',
    required: true,
  })
  event_id: MongooseSchema.Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  resident_id: MongooseSchema.Types.ObjectId;

  @Prop({
    default: () => new Date(),
    required: true,
  })
  registered_at: Date;
}

export const EventRegistrationSchema =
  SchemaFactory.createForClass(EventRegistration);
