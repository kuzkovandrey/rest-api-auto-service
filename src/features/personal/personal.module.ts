import { PersonalModelDefinition } from './personal-model-definition';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonalService } from './personal.service';
import { Module } from '@nestjs/common';
import { PersonalController } from './personal.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      PersonalModelDefinition
    ]),
  ],
  controllers: [
    PersonalController
  ],
  providers: [
    PersonalService
  ]
})
export class PersonalModule {}