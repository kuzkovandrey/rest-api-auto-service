import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonalDocument = Personal & Document;

@Schema()
export class Personal {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) rate: number;
}

export const PersonalSchema = SchemaFactory.createForClass(Personal);