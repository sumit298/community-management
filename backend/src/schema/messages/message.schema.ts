import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type MessagesDocument = Messages & Document;

@Schema({
  timestamps: true,
})
export class Messages {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
  })
  sender_id: MongooseSchema.Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
  })
  receiver_id: MongooseSchema.Types.ObjectId;

  @Prop()
  content: string;
}

export const MessagesSchema = SchemaFactory.createForClass(Messages);
