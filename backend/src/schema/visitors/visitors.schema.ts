import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose'
import { Document, Schema as MongooseSchema } from "mongoose";

export type VisitorsDocument = Document & Visitors

@Schema({
    timestamps: true
})
export class Visitors {
    @Prop({
        required: true,
    })
    name: string

    @Prop({
        required: true, 
        maxlength: 10
    })
    contact_number: string;

    @Prop({
        required: true,
        default: ()=> new Date()
    })
    visit_date: Date;

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'User',
        required: true
    })
    resident_id: MongooseSchema.Types.ObjectId

    @Prop({
        enum: ['Pending', 'Approved', 'Rejected'],
        required: true
    })
    status: string
}

export const VisitorsSchema = SchemaFactory.createForClass(Visitors);