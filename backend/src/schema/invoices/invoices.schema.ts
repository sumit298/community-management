import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type InvoicesDocument = Document & Invoices;

@Schema({
  timestamps: true,
})
export class Invoices {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  resident_id: MongooseSchema.Types.ObjectId;

  @Prop({
    required: true,
  })
  amount: number;

  @Prop({
    required: true,
  })
  due_date: Date;

  @Prop({
    enum: ['Pending', 'Paid'],
    required: true,
  })
  payment_method: string;
}

export const InvoicesSchema = SchemaFactory.createForClass(Invoices);
