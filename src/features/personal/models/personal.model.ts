import { DBEntityModel } from '@models/db-entity.model';

export interface PersonalModel extends DBEntityModel {
    name: string;
    rate: number;
}