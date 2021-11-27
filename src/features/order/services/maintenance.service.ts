import { MaintenanceModel } from '../models/maintenance.model';
import { MaintenanceDto } from '../dto/maintenance.dto';
import { Maintenance, MaintenanceDocument } from '../schemas/maintenance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectModel(Maintenance.name) private maintenanceModel: Model<MaintenanceDocument>
  ) {}

  async createMaintenance(maintenance: MaintenanceDto): Promise<MaintenanceModel> {
    const createdMaintenance = new this.maintenanceModel(maintenance);
    return createdMaintenance.save();
  } 

  async getAllMaintenances(): Promise<MaintenanceModel[]> {
    return this.maintenanceModel.find().exec();
  }

  

}
