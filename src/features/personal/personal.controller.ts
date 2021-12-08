import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Get,
  Delete,
  Param,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalDto } from './dto/personal.dto';
import { EndPoint } from '@enums/end-point.enum';
import { PersonalModel } from './models/personal.model';

@Controller(EndPoint.PERSONAL)
export class PersonalController {
  constructor(private personalService: PersonalService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPerson(@Body() person: PersonalDto): Promise<PersonalModel> {
    return this.personalService.create(person);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletePerson(@Param('id') id: string): Promise<PersonalModel> {
    return this.personalService.delete(id);
  } 

  @Get()
  async getAllPersons(): Promise<PersonalModel[]> {
    return this.personalService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async changePerson(
    @Param('id') id: string,
    @Body() person: PersonalDto
  ): Promise<PersonalModel> {
    return this.personalService.changePerson(id, person);
  }

}
