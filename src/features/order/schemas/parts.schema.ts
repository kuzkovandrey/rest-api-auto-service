import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PartDocument = Part & Document;

@Schema()
export class Part extends Document {
  @Prop({ required: true, unique: true }) name: string;
  @Prop({ required: true }) cost: number;
}

export const PartsSchema = SchemaFactory.createForClass(Part);