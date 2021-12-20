import { InjectModel } from '@nestjs/mongoose';
import { PersonalDto } from './dto/personal.dto';
import { Injectable } from '@nestjs/common';
import { Personal, PersonalDocument } from './schemas/personal.schema';
import { Model, Types } from 'mongoose';
import { PersonalModel } from './models/personal.model';

@Injectable()
export class PersonalService {
  constructor(
    @InjectModel(Personal.name) private personalModel: Model<PersonalDocument>
  ) {}

  async create(person: PersonalDto): Promise<PersonalModel> {
    const createdPerson = new this.personalModel(person);
    return createdPerson.save();
  }

  async delete(id: string): Promise<PersonalModel> {
    return this.personalModel.findByIdAndDelete(id);
  }

  async getAll(): Promise<PersonalModel[]> {
    return this.personalModel.find().exec();
  }

  async changePerson(
    _id: string, 
    update: PersonalDto
  ): Promise<PersonalModel> {
    return this.personalModel.findOneAndUpdate({ _id }, update);
  }
}
