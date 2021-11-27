import { ClientService } from './services/client.service';
import { CarService } from './services/car.service';
import { CarModelDefinition, ClientModelDefinition } from './client-model-definition';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
      MongooseModule.forFeature([
        CarModelDefinition,
        ClientModelDefinition
      ]),
  ],
  providers: [
    CarService,
    ClientService
  ],
  exports: [
    CarService,
    ClientService
  ]
})
export class ClientModule {}
