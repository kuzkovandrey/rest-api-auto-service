import { ModelDefinition } from "@nestjs/mongoose";
import { Personal, PersonalSchema } from './schemas/personal.schema';

export const PersonalModelDefinition: ModelDefinition = {
    name: Personal.name, 
    schema: PersonalSchema
};