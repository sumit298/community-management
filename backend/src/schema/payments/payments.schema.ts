import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type PaymentsType = Document & Payments;

@Schema({
  timestamps: true,
})
export class Payments {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Invoices',
    required: true,
  })
  invoice_id: MongooseSchema.Types.ObjectId;

  @Prop({
    required: true,
  })
  amount: number;

  @Prop({
    default: () => new Date(),
    required: true,
  })
  payment_date: Date;

  @Prop({
    enum: ['Credit Card', 'Debit Card', 'Bank Transfer', 'Cash'],
    required: true,
  })
  payment_method: string;
}

export const PaymentsSchema = SchemaFactory.createForClass(Payments);
