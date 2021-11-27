import { PartModel } from '../models/part.model';
import { Part, PartDocument } from '../schemas/parts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class PartService {
  constructor(
    @InjectModel(Part.name) private partModel: Model<PartDocument>
  ) {}

  async getAllParts(): Promise<PartModel[]> {
    return this.partModel.find().exec();
  }
}
