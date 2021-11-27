import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true }) maintenanceId: string;
  @Prop({ required: true }) clientId: string;
  @Prop({ required: true }) personId: string;
  @Prop({ required: true }) date: string;
  @Prop({ required: true }) cost: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
