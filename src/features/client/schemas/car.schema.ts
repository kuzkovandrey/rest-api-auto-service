import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ required: true }) stateNumber: string;
  @Prop({ required: true }) model: string;
  @Prop({ required: true }) year: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
