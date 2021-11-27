import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalDto } from './dto/personal.dto';
import { EndPoint } from '@enums/end-point.enum';
import { PersonalModel } from './models/personal.model';

@Controller(EndPoint.PERSONAL)
export class PersonalController {
  constructor(private personalService: PersonalService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPerson(@Body() person: PersonalDto): Promise<PersonalModel> {
    return this.personalService.create(person);
  }

  @Delete(':id')
  async deletePerson(@Param('id') id: string): Promise<PersonalModel> {
    return this.personalService.delete(id);
  } 

  @Get()
  async getAllPersons(): Promise<PersonalModel[]> {
    return this.personalService.getAll();
  }
}
