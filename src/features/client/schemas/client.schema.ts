import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Car } from './car.schema';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) email: string;
  @Prop({ required: true, type: Types.ObjectId, ref: Car.name }) 
  carId: Types.ObjectId;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
