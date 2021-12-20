import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Client } from 'src/features/client/schemas/client.schema';
import { Personal } from 'src/features/personal/schemas/personal.schema';
import { Maintenance } from './maintenance.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order extends Document {
  @Prop({ required: true, type: Types.ObjectId, ref: Maintenance.name, index: true }) 
  maintenanceId: Types.ObjectId;
  @Prop({ required: true, type: Types.ObjectId, ref: Client.name, index: true }) 
  clientId: Types.ObjectId;
  @Prop({ required: true, type: Types.ObjectId, ref: Personal.name, index: true }) 
  personId: Types.ObjectId;
  @Prop({ required: true }) 
  date: Date;
  @Prop({ required: true }) 
  cost: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
