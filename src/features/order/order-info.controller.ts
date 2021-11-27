import { OrderInfoService } from './services/order-info.service';
import { OrderModel } from './models/order.model';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { EndPoint } from '@enums/end-point.enum';
  
@Controller(EndPoint.ORDER_INFO)
export class OrderInfoController {
  constructor(private orderInfoService: OrderInfoService) {}

  //TODO: add guard  
  @Get(':id')
  async getPersonOrders(@Param('id') id: string): Promise<OrderModel[]> {
    return this.orderInfoService.getPersonOrders(id);
  }

  //TODO: add guard 
  @Get()
  async getOrdersByMonth(@Query('month') month: number): Promise<OrderModel[]> {
    return this.orderInfoService.getOrdersByMonth(month);
  }

}
  