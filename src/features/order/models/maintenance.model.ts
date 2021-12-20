import { DBEntityModel } from '@models/db-entity.model';
import { Types } from 'mongoose';

export interface MaintenanceModel extends DBEntityModel{
  priceListId: Types.ObjectId;
  partsId?: Types.ObjectId[];
}
