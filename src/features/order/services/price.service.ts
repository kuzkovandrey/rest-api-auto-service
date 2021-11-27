import { PriceModel } from '../models/price.model';
import { PriceDocument } from '../schemas/price.schema';
import { Price } from '../schemas/price.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(Price.name) private priceModel: Model<PriceDocument>
  ) {}

  async getPriceList(): Promise<PriceModel[]> {
    return this.priceModel.find().exec();
  }

}
