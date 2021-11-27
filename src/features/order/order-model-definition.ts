import { Order, OrderSchema } from './schemas/order.schema';
import { Maintenance, MaintenanceSchema } from './schemas/maintenance.schema';
import { Part, PartsSchema } from './schemas/parts.schema';
import { Price, PriceSchema } from './schemas/price.schema';
import { ModelDefinition } from '@nestjs/mongoose';

export const PartsModelDefinition: ModelDefinition = {
  name: Part.name,
  schema: PartsSchema,
};

export const PriceModelDefinition: ModelDefinition = {
  name: Price.name,
  schema: PriceSchema,
};

export const MaintenanceModelDefinition: ModelDefinition = {
  name: Maintenance.name,
  schema: MaintenanceSchema,
};

export const OrderModelDefinition: ModelDefinition = {
  name: Order.name,
  schema: OrderSchema,
};
