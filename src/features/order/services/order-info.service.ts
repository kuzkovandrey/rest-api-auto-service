import { OrderModel } from './../models/order.model';
import { Order, OrderDocument } from './../schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class OrderInfoService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async getPersonOrders(personId: string): Promise<OrderModel[]> {
    return this.orderModel.find({
      personId
    }).exec();
  }

  async getOrdersByMonth(month: number): Promise<OrderModel[]> {
    return this.orderModel.find({
        date: `${month}`
      }).exec();
  }
}
