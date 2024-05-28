import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type IncidentDocument = Incidents & Document;

@Schema({
  timestamps: true,
})
export class Incidents {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  resident_id: MongooseSchema.Types.ObjectId;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    enum: ['Reported', 'In Progress', 'Resolved'],
    required: true,
  })
  status: string;
}

export const IncidentSchema = SchemaFactory.createForClass(Incidents);
