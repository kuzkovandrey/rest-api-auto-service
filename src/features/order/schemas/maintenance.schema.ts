import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MaintenanceDocument = Maintenance & Document;

@Schema()
export class Maintenance {
  @Prop({ required: true }) priceListId: string;
  @Prop() partsId: string[];
}

export const MaintenanceSchema = SchemaFactory.createForClass(Maintenance);