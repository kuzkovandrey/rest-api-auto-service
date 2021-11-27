import { CarDto } from './../dto/car.dto';
import { Car, CarDocument } from './../schemas/car.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CarModel } from '../models/car.model';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>
  ) {}

  async createCar(car: CarDto): Promise<CarModel> {
    const createdCar = new this.carModel(car);
    return createdCar.save();
  }

  async getAllCars(): Promise<CarModel[]> {
    return this.carModel.find().exec();
  }

}
