import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ required: true, unique: true }) stateNumber: string;
  @Prop({ required: true, unique: true }) model: string;
  @Prop({ required: true, unique: true }) year: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
