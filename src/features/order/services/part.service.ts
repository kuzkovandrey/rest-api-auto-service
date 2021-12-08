import { PartDto } from './../dto/part.dto';
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

  async createPart(part: PartDto): Promise<PartModel> {
    const crearedPart = new this.partModel(part);
    return crearedPart.save();
  }

  async changePart(_id: string, part: PartDto): Promise<PartModel> {
    return this.partModel.findOneAndUpdate({ _id }, part);
  }

  async deletePart(id: string): Promise<PartModel> {
    return this.partModel.findByIdAndDelete(id);
  }
}
