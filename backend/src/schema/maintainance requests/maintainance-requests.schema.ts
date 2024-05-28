import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';

export type MaintainanceRequestsDocument = Document & MaintainanceRequests;

@Schema({
  timestamps: true,
})
export class MaintainanceRequests {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
  })
  resident_id: MongooseSchema.Types.ObjectId;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    enum: ['Submitted', 'In Progess', 'Completed'],
    required: true,
  })
  status: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
  })
  assigned_to: MongooseSchema.Types.ObjectId;
}

export const MaintainanceRequestsSchema =
  SchemaFactory.createForClass(MaintainanceRequests);
