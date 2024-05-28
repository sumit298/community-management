import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import {Schema as MongooseSchema, Document} from 'mongoose'

export type SurveyResponseDocument = Document & SurveyResponse

@Schema({
    timestamps: true
})
export class SurveyResponse{
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: "Surveys"
    })
    survey_id: MongooseSchema.Types.ObjectId

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: "User"
    })
    resident_id: MongooseSchema.Types.ObjectId

    @Prop({
        required: true
    })
    response_content: string;

    @Prop({
        default: ()=> new Date()
    })
    submitted_at: Date
}

export const SurveyResponseSchema = SchemaFactory.createForClass(SurveyResponse);