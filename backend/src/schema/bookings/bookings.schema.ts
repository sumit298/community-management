import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type BookingsDocument = Bookings & Document;

@Schema({
  timestamps: true,
})
export class Bookings {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Facilities',
    required: true,
  })
  facility_id: MongooseSchema.Types.ObjectId;

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
  booking_date: Date;

  @Prop({
    required: true,
  })
  start_time: string;

  @Prop({
    required: true,
  })
  end_time: string;
}

export const BookingsSchema = SchemaFactory.createForClass(Bookings);
