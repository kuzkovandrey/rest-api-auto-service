import { DBEntityModel } from '@models/db-entity.model';
import { Schema as MongooseSchema , Types} from 'mongoose';

export interface ClientModel extends DBEntityModel {
  name: string;
  email: string;
  carId: Types.ObjectId;
}
