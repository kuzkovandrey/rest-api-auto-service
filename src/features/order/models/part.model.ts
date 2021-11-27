import { DBEntityModel } from '@models/db-entity.model';

export interface PartModel extends DBEntityModel {
  name: string;
  cost: number;
}
