//TODO: Alias
import {
  Controller,
  Get,
  UseGuards
} from '@nestjs/common';
import { CarService } from './../services/car.service';
import { EndPoint } from '@enums/end-point.enum';
import { CarModel } from '../models/car.model';
import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';

@Controller(EndPoint.CAR)
export class CarController {
  constructor(private carService: CarService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllCars(): Promise<CarModel[]> {
    return this.carService.getAllCars();
  }
}
