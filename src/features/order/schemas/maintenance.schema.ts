import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Part } from './parts.schema';
import { Price } from './price.schema';

export type MaintenanceDocument = Maintenance & Document;

@Schema()
export class Maintenance extends Document {
  @Prop({ type: Types.ObjectId, required: true, ref: Price.name, index: true }) 
  priceListId: Types.ObjectId;
  @Prop({ type: [{ type: Types.ObjectId, ref: Part.name, index: true}] }) 
  partsId: Types.ObjectId[];
}

export const MaintenanceSchema = SchemaFactory.createForClass(Maintenance);