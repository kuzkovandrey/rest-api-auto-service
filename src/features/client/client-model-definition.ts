import { Client, ClientSchema } from './schemas/client.schema';
import { Car, CarSchema } from './schemas/car.schema';
import { ModelDefinition } from '@nestjs/mongoose';

export const CarModelDefinition: ModelDefinition = {
  name: Car.name,
  schema: CarSchema,
};

export const ClientModelDefinition: ModelDefinition = {
  name: Client.name,
  schema: ClientSchema,
};
