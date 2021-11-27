import { DBEntityModel } from '@models/db-entity.model';

export interface MaintenanceModel extends DBEntityModel{
  priceListId: string;
  partsId?: string[];
}
