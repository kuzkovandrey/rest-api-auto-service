import { PriceDto } from './../dto/price.dto';
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

  async createPrice(price: PriceDto): Promise<PriceModel> {
    const crearedPrice = new this.priceModel(price);
    return crearedPrice.save();
  }

  async changePrice(_id: string, price: PriceDto): Promise<PriceModel> {
    return this.priceModel.findOneAndUpdate({ _id }, price);
  }

  async deletePrice(id: string): Promise<PriceModel> {
    return this.priceModel.findByIdAndDelete(id);
  }

}
