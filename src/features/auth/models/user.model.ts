import { DBEntityModel } from '@models/db-entity.model';

export interface UserModel extends DBEntityModel {
    username: string;
    password: string;
}