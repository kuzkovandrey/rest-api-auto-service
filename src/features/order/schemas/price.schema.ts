import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PriceDocument = Price & Document;

@Schema()
export class Price {
  @Prop({ required: true }) description: string;
  @Prop({ required: true }) cost: number;
}

export const PriceSchema = SchemaFactory.createForClass(Price);