import { DBEntityModel } from '@models/db-entity.model';

export interface ClientModel extends DBEntityModel {
  name: string;
  email: string;
  carId: string;
}
