import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FacilitiesDocument = Document & Facilities;

@Schema({
  timestamps: true,
})
export class Facilities {
  @Prop({
    required: true,
  })
  name: string;

  @Prop()
  description: string;

  @Prop()
  availability: [Date];
}

export const FacilitiesSchema = SchemaFactory.createForClass(Facilities);
