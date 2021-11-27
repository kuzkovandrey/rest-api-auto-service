import { ApiOrder } from './../../models/api-order.model';
import { OrderModel } from './models/order.model';
import { OrderDto } from './dto/order.dto';
import { PriceService } from './services/price.service';
import { PartService } from './services/part.service';
import { MaintenanceService } from './services/maintenance.service';
import { PartModel } from './models/part.model';
import { PriceModel } from './models/price.model';
import { OrderService } from './services/order.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EndPoint } from '@enums/end-point.enum';
  
@Controller(EndPoint.ORDER)
export class OrderController {
  constructor(
    private orderService: OrderService,
    private maintenanceService: MaintenanceService,
    private partService: PartService,
    private priceService: PriceService
  ) {}

  @Get(EndPoint.PRICE_LIST)
  async getPriceList(): Promise<PriceModel[]> {
    return this.priceService.getPriceList();
  }

  @Get(EndPoint.PARTS)
  async getAllParts(): Promise<PartModel[]> {
    return this.partService.getAllParts();
  }

  @Post(EndPoint.CREATE)
  @HttpCode(HttpStatus.CREATED)
  async saveOrder(@Body() order: ApiOrder): Promise<OrderModel> {
    return this.orderService.saveOrder(order);
  }

}
  