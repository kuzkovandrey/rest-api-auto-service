import { 
  Body, 
  Controller, 
  HttpCode, 
  HttpStatus, 
  Post,
  Get
} from '@nestjs/common';
import { EndPoint } from '@enums/end-point.enum';
import { ApiOrder } from '../../../models/api-order.model';
import { OrderModel } from '../models/order.model';
import { OrderService } from '../services/order.service';
  
@Controller(EndPoint.ORDER)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post(EndPoint.CREATE)
  @HttpCode(HttpStatus.CREATED)
  async saveOrder(@Body() order: ApiOrder): Promise<OrderModel> {
    return this.orderService.saveOrder(order);
  }

}