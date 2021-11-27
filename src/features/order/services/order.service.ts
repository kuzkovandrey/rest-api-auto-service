import { OrderModel } from './../models/order.model';
import { OrderDto } from './../dto/order.dto';
import { ClientDto } from './../../client/dto/client.dto';
import { CarDto } from './../../client/dto/car.dto';
import { ClientService } from './../../client/services/client.service';
import { CarService } from './../../client/services/car.service';
import { MaintenanceService } from './maintenance.service';
import { ApiOrder } from './../../../models/api-order.model';
import { Order, OrderDocument } from './../schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private maintenanceService: MaintenanceService,
    private carService: CarService,
    private clientService: ClientService
  ) {}


  private async createMaintenance(
    partsId: string[], 
    priceListId: string
  ): Promise<string> {
    const maintenance = await this.maintenanceService
      .createMaintenance({
        partsId, priceListId
      });
    return maintenance._id;
  }

  private async createCar(car: CarDto): Promise<string> {
    const createdCar = await this.carService.createCar(car);
    return createdCar._id;
  }

  private async createClient(client: ClientDto): Promise<string> {
    const createdClient = await this.clientService.createClient(client); 
    return createdClient._id;
  }

  private async prepareOrder(order: ApiOrder): Promise<OrderDto> {
    const maintenanceId =  await this.createMaintenance(
      order.partsId,
      order.priceListId
    );
    const carId = await this.createCar(order.car);
    const clientId = await this.createClient({
      carId,
      ...order.client
    });
    return {
      maintenanceId,
      clientId,
      personId: order.personId,
      date: new Date().toString(),
      cost: order.cost
    } as OrderDto;
  }

  async saveOrder(order: ApiOrder): Promise<OrderModel> {
    const preparedOrder = await this.prepareOrder(order);
    const createdOrder = new this.orderModel(preparedOrder);
    return createdOrder.save();
  }

}
