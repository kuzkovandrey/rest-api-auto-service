import { DBEntityModel } from '@models/db-entity.model';

export interface CarModel extends DBEntityModel {
  stateNumber: string;
  model: string;
  year: number;
}
