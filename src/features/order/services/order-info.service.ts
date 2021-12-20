//TODO: Alias
import { OrderModel } from './../models/order.model';
import { ClientDocument, Client } from './../../client/schemas/client.schema';
import { CarDocument, Car } from './../../client/schemas/car.schema';
import { ApiOrder } from '@models/api-order.model';
import { Order, OrderDocument } from './../schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model, Schema as MongooseSchema, Types } from 'mongoose';
import { Personal, PersonalDocument } from 'src/features/personal/schemas/personal.schema';

@Injectable()
export class OrderInfoService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    @InjectModel(Personal.name) private personalModel: Model<PersonalDocument>
  ) {}

  async getOrdersByMonth(year: string, month: string): Promise<ApiOrder[]> {
    //TODO: Separate method for get date
    const orders = await this.orderModel.find({
      date: {
        $gte: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${month}-31T23:59:00.000Z`)
      }
    });
    //TODO: Separate method
    const preparedOrder = orders.map(async (order: OrderModel) => {
      const client = await this.clientModel.findById(order.clientId).exec();
      const car = await this.carModel.findById(client.carId);
      return {
        cost: order.cost,
        client,
        car,
        date: order.date,
        orderId: order._id,
        personId: `${order.personId}`
      }
    });
    return Promise.all(preparedOrder);
  }

  async getPersonOrders(year: number, month: number, personId: string, ): Promise<ApiOrder[]> {
    const orders = await this.orderModel.find({
      personId: new Types.ObjectId(personId),
      date: {
        $gte: new Date(`${year}-${month}-01T00:00:00.000Z`),
        $lt: new Date(`${year}-${month}-31T23:59:00.000Z`)
      }
    });
    const person = await this.personalModel.findById(personId);
    //const salary = orders.reduce((acc, order) => acc + order.cost, 0);
    const preparedOrder = orders.map(async (order: OrderModel) => {
      const client = await this.clientModel.findById(order.clientId).exec();
      const car = await this.carModel.findById(client.carId);
      return {
        cost: order.cost * person.rate,
        client,
        car,
        date: order.date,
        orderId: order._id,
        personId: `${order.personId}`
      }
    });
    return Promise.all(preparedOrder);
  }

}