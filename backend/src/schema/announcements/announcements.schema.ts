import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export type AnnouncementDocument = Announcement & Document;

@Schema({
    timestamps: true
})
export class Announcement {
    @Prop()
    title: string;  // Should be lowercase 'string'

    @Prop()
    content: string;  // Should be lowercase 'string'

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    createdBy: MongooseSchema.Types.ObjectId;  // Should be ObjectId type
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
