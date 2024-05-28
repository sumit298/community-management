import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    maxlength: 20,
    minlength: 2,
  })
  name: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    enum: ['Resident', 'Admin', 'Service Provider'],
    required: true,
  })
  role: string;

  @Prop({
    maxlength: 10,
    minlength: 10,
  })
  phoneNumber: string;

  @Prop()
  apartmentNumber: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
