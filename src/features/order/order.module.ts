import { PersonalModelDefinition } from './../personal/personal-model-definition';
import { ClientModelDefinition, CarModelDefinition } from './../client/client-model-definition';
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
import { OrderController } from './controllers/order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ClientModule } from './../client/client.module';
import { OrderInfoService } from './services/order-info.service';
import { OrderInfoController } from './controllers/order-info.controller';
import { PartController } from './controllers/part.controller';
import { PriceController } from './controllers/price.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      PartsModelDefinition,
      PriceModelDefinition,
      MaintenanceModelDefinition,
      OrderModelDefinition,
      CarModelDefinition,
      ClientModelDefinition,
      PersonalModelDefinition
    ]),
    ClientModule
  ],
  controllers: [
    OrderController,
    OrderInfoController,
    PriceController,
    PartController
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
