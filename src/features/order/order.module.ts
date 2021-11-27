import {
  PartsModelDefinition,
  PriceModelDefinition,
  MaintenanceModelDefinition,
  OrderModelDefinition,
} from './order-model-definition';
import { MaintenanceService } from './services/maintenance.service';
import { PriceService } from './services/price.service';
import { PartService } from './services/part.service';
import { OrderService } from './services/order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ClientModule } from './../client/client.module';
import { OrderInfoService } from './services/order-info.service';
import { OrderInfoController } from './order-info.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      PartsModelDefinition,
      PriceModelDefinition,
      MaintenanceModelDefinition,
      OrderModelDefinition,
    ]),
    ClientModule
  ],
  controllers: [
    OrderController,
    OrderInfoController
  ],
  providers: [
    OrderService,
    OrderInfoService,
    PartService,
    PriceService,
    MaintenanceService
  ],
})
export class OrderModule {}
