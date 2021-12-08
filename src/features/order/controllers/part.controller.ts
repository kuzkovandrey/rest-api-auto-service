import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';
import { PartDto } from './../dto/part.dto';
import { PartModel } from './../models/part.model';
import { PriceService } from '../services/price.service';
import { PartService } from '../services/part.service';
import { MaintenanceService } from '../services/maintenance.service';
import { OrderService } from '../services/order.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { EndPoint } from '@enums/end-point.enum';
  
@Controller(EndPoint.PARTS)
export class PartController {
  constructor(
    private orderService: OrderService,
    private maintenanceService: MaintenanceService,
    private partService: PartService,
    private priceService: PriceService
  ) {}

  @Get()
  async getAllParts(): Promise<PartModel[]> {
    return this.partService.getAllParts();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPart(@Body() part: PartDto): Promise<PartModel> {
    return this.partService.createPart(part);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async changePart(
    @Param('id') id: string,
    @Body() part: PartDto
  ): Promise<PartModel> {
    return this.partService.changePart(id, part);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletePrice(@Param('id') id: string): Promise<PartModel> {
    return this.partService.deletePart(id);
  }

}
  