import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';
import { ApiOrder } from '@models/api-order.model';
import { OrderInfoService } from '../services/order-info.service';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { EndPoint } from '@enums/end-point.enum';
  
@Controller(EndPoint.ORDER_INFO)
export class OrderInfoController {
  constructor(private orderInfoService: OrderInfoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getOrdersByMonth(
    @Query('year') year: string, @Query('month') month: string
  ): Promise<ApiOrder[]> {
    return this.orderInfoService.getOrdersByMonth(year, month);
  }

  @UseGuards(JwtAuthGuard)
  @Get(`${EndPoint.SALARY}/:id`)
  async getPersonOrders(
    @Param('id') id: string,
    @Query('year') year: number, 
    @Query('month') month: number
  ): Promise<ApiOrder[]> {
    return this.orderInfoService.getPersonOrders(year, month, id);
  }

}
  