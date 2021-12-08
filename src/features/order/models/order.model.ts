import { DBEntityModel } from '@models/db-entity.model';

export interface OrderModel extends DBEntityModel {
  maintenanceId: string;
  clientId: string;
  personId: string;
  date: Date;
  cost: number;
}
