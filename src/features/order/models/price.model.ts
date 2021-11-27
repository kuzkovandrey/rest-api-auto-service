import { DBEntityModel } from '@models/db-entity.model';

export interface PriceModel extends DBEntityModel {
  description: string;
  cost: number;
}