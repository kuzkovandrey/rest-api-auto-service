import { 
  Body, 
  Controller,
  Delete, 
  Get, 
  HttpCode, 
  HttpStatus, 
  Param, 
  Patch, 
  Post, 
  UseGuards
} from '@nestjs/common';
import { PriceDto } from './../dto/price.dto';
import { PriceService } from '../services/price.service';
import { PriceModel } from '../models/price.model';
import { EndPoint } from '@enums/end-point.enum';
import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';
  
@Controller(EndPoint.PRICE_LIST)
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get()
  async getPriceList(): Promise<PriceModel[]> {
    return this.priceService.getPriceList();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPrice(@Body() price: PriceDto): Promise<PriceModel> {
    return this.priceService.createPrice(price);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async changePrice(
    @Param('id') id: string,
    @Body() price: PriceDto
  ): Promise<PriceModel> {
    return this.priceService.changePrice(id, price);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deletePrice(@Param('id') id: string): Promise<PriceModel> {
    return this.priceService.deletePrice(id);
  }

}
  