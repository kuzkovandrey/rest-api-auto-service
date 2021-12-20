import { DBEntityModel } from '@models/db-entity.model';
import { Types } from 'mongoose';

export interface OrderModel extends DBEntityModel {
  maintenanceId: Types.ObjectId;
  clientId: Types.ObjectId;
  personId: Types.ObjectId;
  date: Date;
  cost: number;
}
